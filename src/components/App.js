import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    _id: '',
  });

  React.useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const handleUpdateUser = (inputData) => {
    api
      .saveUserData(inputData)
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          handleCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
