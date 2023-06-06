
import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [disable, setDisable] = useState(false)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setFirstCard(null)
    setSecondCard(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    if(!disable) {
      firstCard ? setSecondCard(card) : setFirstCard(card)
    }
  }

  

  useEffect(() => {
    // console.log(cards)
    if( firstCard && secondCard) {
      setDisable(true)
      if(firstCard.src === secondCard.src) {
        // console.log("matched")
        setCards(prevCards => {
          return prevCards.map(card => {
              if(card.src === firstCard.src) {
                return {...card, matched: true}
              } else {
                return card
              }
            })
        })
      resetCard()
      } else {
        // console.log("card not matched")
        setTimeout(() => resetCard(), 1000)
      }
    }
  }, [firstCard, secondCard])

  const resetCard = () => {
    setFirstCard(null)
    setSecondCard(null)
    setTurns(prev => prev + 1)
    setDisable(false)
  }

  useEffect(() => {
    shuffleCards()
  },[])
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map( card => <SingleCard flipped={card === firstCard || card === secondCard || card.matched} handleChoice={handleChoice} key={card.id} card={card} />)}
      </div>
      <p>Turns: {turns}</p>
    </div>
  )
}

export default App
