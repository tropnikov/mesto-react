import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');

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
        id="place-name-input"
        type="text"
        name="name"
        className="form__input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={handlePlaceNameChange}
      />
      <span className="place-name-input-error form__input-error"></span>
      <input
        id="place-link-input"
        type="url"
        name="link"
        className="form__input"
        placeholder="Ссылка на картинку"
        required
        onChange={handlePlaceLinkChange}
      />
      <span className="place-link-input-error form__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
