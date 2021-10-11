import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState(
    'Исследователь океана'
  );
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then((data) => {
        const [userData, cardsData] = data;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content page__content">
      <section className="profile page__section">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__bio">{userDescription}</p>

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
        <ul className="places__list">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={handleCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
