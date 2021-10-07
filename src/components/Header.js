import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header page__section">
      <img
        className="logo header__logo"
        src={logo}
        alt="Логотип Проекта Место"
      />
    </header>
  );
}

export default Header;
