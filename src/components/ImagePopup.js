function ImagePopup(props) {
  return (
    <div
      className={
        `popup popup_photo place-full-photo` +
        (props.card.link && ` popup_opened`)
      }
    >
      <div className="popup__photo-container">
        <button
          className="
      popup__close
      button button_type_close

      hover
    "
          type="button"
          aria-label="Закрыть попап"
        ></button>

        <img
          src={props.card.link}
          alt={props.card.name}
          className="place-full-photo__image"
        />
        <h3 className="place-full-photo__caption">{props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
