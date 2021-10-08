import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setuserAvatar] = React.useState();

  return (
    <main className="content page__content">
      <section className="profile page__section">
        <div className="profile__avatar" onClick={onEditAvatar}></div>

        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__bio">Исследователь океана</p>

          <button
            className="profile__edit-button button button_type_edit hover"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>

        <button
          className="button button_type_add hover"
          name="add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places page__section">
        <ul className="places__list"></ul>
      </section>
    </main>
  );
}

export default Main;
