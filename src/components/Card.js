function Card({ card, onCardClick }) {
  console.log(onCardClick);
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="place">
      <img
        className="place__photo"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        className="place__delete place__delete_active button_type_delete hover"
      ></button>
      <div className="place__info">
        <h3 className="place__title">{card.name}</h3>
        <div className="place__likes-container">
          <button className="place__like" type="button"></button>
          <p className="place__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
