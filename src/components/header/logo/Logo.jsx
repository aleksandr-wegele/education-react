import './Logo.css';
import headder_logo from './../../img/dog.png'
import LogoText from './logo_text/LogoText'

function Logo() {
  return (
    <div className="header__logo">
      <img src={headder_logo} alt="" className='header__logo-img'/>
      <LogoText/>
    </div>
  );
}

export default Logo;