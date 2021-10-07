import logo from './logo.svg';
import React from 'react';
// import './App.css';

function App() {
  return (
    <div className="page__container">
      <header className="header page__section">
        <img
          className="logo header__logo"
          src={logo}
          alt="Логотип Проекта Место"
        />
      </header>

      <main className="content page__content">
        <section className="profile page__section">
          <div className="profile__avatar"></div>

          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__bio">Исследователь океана</p>

            <button
              className="profile__edit-button button button_type_edit hover"
              type="button"
            ></button>
          </div>

          <button
            className="button button_type_add hover"
            name="add-button"
            type="button"
          ></button>
        </section>

        <section className="places page__section">
          <ul className="places__list"></ul>
        </section>
      </main>

      <footer className="footer page__section">
        <p className="footer__copyright">&copy; 2021 Максим Тропников</p>
      </footer>

      <div className="popup profile-edit">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close
            profile-edit__close-button
            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>

          <form
            action="#"
            className="form popup__form profile-edit__form"
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

      <div className="popup place-add">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close
            place-add__close-button
            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Новое место</h2>

          <form
            action="#"
            className="form popup__form place-add__form"
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

      <div className="popup popup_photo place-full-photo">
        <div className="popup__photo-container">
          <button
            className="
            popup__close
            button button_type_close
            place-full-photo__close-button
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

      <div className="popup card-delete-confirmation">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close
            card-delete-confirmation__close-button
            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            action="#"
            className="form popup__form card-delete-confirmation__form"
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

      <div className="popup avatar-update">
        <div className="popup__container">
          <button
            className="
            popup__close
            button button_type_close
            avatar-update__close-button
            hover
          "
            type="button"
            aria-label="Закрыть попап"
          ></button>

          <h2 className="popup__title">Обновить аватар</h2>

          <form
            action="#"
            className="form popup__form avatar-update__form"
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
