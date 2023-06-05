
import { useState } from 'react'
import './App.css'

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

  const shuffleCards = () => {
    const cards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map( card => ( {...card, id: Math.random()}))

    setCards(cards)
    setTurns(0)
  }
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map( card => {
          return (
            <div className='card' key={card.id}>
              <div>
              <img src={card.src} className='front' alt="front card" />
              <img src="./img/cover.png" className='back' alt="back card" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
