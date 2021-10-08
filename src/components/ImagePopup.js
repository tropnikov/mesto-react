function ImagePopup() {
  return (
    <div className="popup popup_photo place-full-photo">
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
          src="#"
          alt="Фотография места"
          className="place-full-photo__image"
        />
        <h3 className="place-full-photo__caption"></h3>
      </div>
    </div>
  );
}

export default ImagePopup;
