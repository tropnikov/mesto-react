function Card(props) {
  return (
    <li className="place">
      <img
        className="place__photo"
        src={props.card.link}
        alt="Фотография места"
      />
      <button
        type="button"
        className="place__delete place__delete_active button_type_delete hover"
      ></button>
      <div className="place__info">
        <h3 className="place__title">{props.card.title}</h3>
        <div className="place__likes-container">
          <button className="place__like" type="button"></button>
          <p className="place__likes-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
