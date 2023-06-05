
import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const shuffleCards = () => {
    const cards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map( card => ( {...card, id: Math.random()}))

    setCards(cards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card)
  }

  const resetCard = () => {
    setFirstCard(null)
    setSecondCard(null)
  }

  useEffect(() => {
    if( firstCard && secondCard) {
      if(firstCard.src === secondCard.src) {
        console.log("card matched")
      resetCard()
      setTurns(prev => prev + 1)
      } else {
        console.log("card not matched")
        resetCard()
        setTurns(0)
      }
    }
  }, [firstCard, secondCard])
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map( card => <SingleCard handleChoice={handleChoice} key={card.id} card={card} />)}
      </div>
    </div>
  )
}

export default App
