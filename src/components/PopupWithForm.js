function PopupWithForm(props) {
  return (
    <div
      className={
        `popup popup_type_${props.name}` + (props.isOpen && ` popup_opened`)
      }
    >
      <div className="popup__container">
        <button
          className="
            popup__close
            button button_type_close
            hover
          "
          onClick={props.onClose}
          type="button"
          aria-label="Закрыть попап"
        ></button>
        <h2 className="popup__title">{props.title}</h2>

        <form
          action="#"
          className={`form popup__form form_type_${props.name}`}
          name={`${props.name}-form`}
          noValidate
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
