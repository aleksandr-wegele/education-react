import './Header.css';
import Logo from './logo/Logo'




function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <Logo />
      </div>
    </header>
  );
}

export default Header;