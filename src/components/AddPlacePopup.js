import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');

  // ? Правильно ли я понимаю, что через рефы код короче? :
  // const placeNameRef = React.useRef('');
  // const placeLinkRef = React.useRef('');
  // const handleSubmit = (evt) => {
  // evt.preventDefault();
  // onAddPlace({
  // name: placeNameRef.current.value,
  // link: placeLinkRef.current.value,
  // });
  // };
  // Есть ли какие-то рекомендации, что лучше использовать здесь (и вообще)?
  // И как в таком случае очищать поле ввода? Потому что в попапе аватара оно сейчас не очищается...

  React.useEffect(() => {
    setPlaceName('');
    setPlaceLink('');
  }, [isOpen]);

  const handlePlaceNameChange = (evt) => {
    setPlaceName(evt.target.value);
  };
  const handlePlaceLinkChange = (evt) => {
    setPlaceLink(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({ name: placeName, link: placeLink });
  };

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="place-add"
      title="Новое место"
      submitButtonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        // ref={placeNameRef}
        id="place-name-input"
        type="text"
        name="name"
        className="form__input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={placeName}
        onChange={handlePlaceNameChange}
      />
      <span className="place-name-input-error form__input-error"></span>
      <input
        // ref={placeLinkRef}
        id="place-link-input"
        type="url"
        name="link"
        className="form__input"
        placeholder="Ссылка на картинку"
        required
        value={placeLink}
        onChange={handlePlaceLinkChange}
      />
      <span className="place-link-input-error form__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
