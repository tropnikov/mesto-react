import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        handleCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        name="profile-edit"
        title="Редактировать профиль"
        submitButtonText="Сохранить"
      >
        <input
          id="profile-name-input"
          type="text"
          name="name"
          className="form__input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="profile-name-input-error form__input-error"></span>
        <input
          id="profile-bio-input"
          type="text"
          name="about"
          className="form__input"
          placeholder="Краткое био"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="profile-bio-input-error form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        name="place-add"
        title="Новое место"
        submitButtonText="Создать"
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
        />
        <span className="place-name-input-error form__input-error"></span>
        <input
          id="place-link-input"
          type="url"
          name="link"
          className="form__input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="place-link-input-error form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        name="confirmation"
        title="Вы уверены?"
        submitButtonText="Да"
      ></PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        name="avatar-update"
        title="Обновить аватар"
        submitButtonText="Сохранить"
      >
        <input
          id="avatar-update-input"
          type="url"
          name="avatar"
          className="form__input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-update-input-error form__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
