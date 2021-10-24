# Mesto React

## Обзор
Фронтенд [проекта Mesto](https://github.com/tropnikov/mesto) на React. 

## Функциональность:
На данный момент происходит портирование проекта Место на React, используются функциональные компоненты и хуки `useState` и `useEffect`, контекст пользователя, управляемые компоненты и рефы. Реализовано следующее:
- Компоненты App, Header, Main, Footer
- Компонент Card, добавление новых карточек
- Компоненты попапов с формами PopupWithForm - разбиты на отдельные компоненты редактирования аватара, профиля и добавления карточки
- Компонент попапа просмотра фотографии в полном размере ImagePopup
- Загрузка списка карточек с сервера по API (через промисы), сохранение информации на сервере
## Стек
- HTML
- CSS: flexbox, grid, animations, media queries
- JavaScript
- React (useState, useEffect, useRef, useContext)
- Create React App
- БЭМ
- API calls via Promises
- ООП
- Npm


## Посмотреть

Ссылка на Pages: https://tropnikov.github.io/mesto-react

### Локальное демо
- Клонировать репозиторий `git clone git@github.com:tropnikov/mesto-react.git`

- Выполнить в директории репозитория `npm i`
- Запустить проект в браузере по умолчанию: `npm start`  

## Планы
- Валидация форм
- Попап подтверждения удаления карточки
- Индикация загрузки через спинер
