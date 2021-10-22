import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `...`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <li className="place">
      <img
        className="place__photo"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        className="place__delete place__delete_inactive button_type_delete hover"
      ></button>
      <div className="place__info">
        <h3 className="place__title">{card.name}</h3>
        <div className="place__likes-container">
          <button className="place__like" type="button"></button>
          <p className="place__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
