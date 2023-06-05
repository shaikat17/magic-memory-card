import "./singleCard.css"

const SingleCard = ({card, handleChoice}) => {
    return (
        <div className='card' key={card.id}>
              <div>
              <img src={card.src} className='front' alt="front card" />
              <img src="./img/cover.png" className='back' alt="back card" onClick={() => handleChoice(card)} />
              </div>
            </div>
    );
};

export default SingleCard;