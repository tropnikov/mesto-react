import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ onClose, isOpen, onUpdateAvatar }) {
  const avatarRef = React.useRef('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="avatar-update"
      title="Обновить аватар"
      submitButtonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-update-input"
        type="url"
        name="avatar"
        className="form__input"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="avatar-update-input-error form__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
