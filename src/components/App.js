import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="page__container">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name={'profile-edit'} title={'Редактировать профиль'}>
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
      <ImagePopup />

      <div className="popup popup_type_profile-edit">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close

            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>

          <form
            action="#"
            className="form popup__form form_type_profile-edit"
            name="profile-edit-form"
            noValidate
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
          </form>
        </div>
      </div>

      <div className="popup popup_type_place-add">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close
            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Новое место</h2>

          <form
            action="#"
            className="form popup__form form_type_place-add"
            name="place-add-form"
            noValidate
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
          </form>
        </div>
      </div>

      <div className="popup popup_type_confirmation">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close

            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            action="#"
            className="form popup__form form_type_confirmation"
            name="place-delete-form"
            noValidate
          >
            <button
              type="submit"
              className="popup__save button form__submit button_type_save"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar-update">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close

            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>

          <h2 className="popup__title">Обновить аватар</h2>

          <form
            action="#"
            className="form popup__form form_type_avatar-update"
            name="avatar-update-form"
            noValidate
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
