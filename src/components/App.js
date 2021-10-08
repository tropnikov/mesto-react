import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopup] = React.useState(false);

  const handleEditProfileClick = () => {
    openEditProfilePopup(true);
  };

  const handleAddPlaceClick = () => {
    openAddPlacePopup(true);
  };

  const handleEditAvatarClick = () => {
    openEditAvatarPopup(true);
  };

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name="profile-edit"
        title="Редактировать профиль"
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
        <button
          type="submit"
          className="popup__save button form__submit button_type_save"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name="place-add"
        title="Новое место"
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
        <button
          type="submit"
          className="
              popup__save
              button
              form__submit
              button_type_save button_disabled
            "
          disabled
        >
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm name="confirmation" title="Вы уверены?">
        <button
          type="submit"
          className="popup__save button form__submit button_type_save"
        >
          Да
        </button>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="avatar-update"
        title="Обновить аватар"
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
        <button
          type="submit"
          className="
              popup__save
              button
              form__submit
              button_type_save button_disabled
            "
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>

      <ImagePopup />
    </div>
  );
}

export default App;
