import './Nav.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <div className='nav__wraper'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <Link to="/profile" className="nav__list-link">My Profile</Link>
          </li>
          <li className='nav__list-item'>
            <Link to="/message" className="nav__list-link">Message</Link>
          </li>
          <li className='nav__list-item'>
            <Link to="#" className="nav__list-link">My friends</Link>
          </li>
          <li className='nav__list-item'>
            <Link to="#" className="nav__list-link">My Post</Link>
          </li>
          <li className='nav__list-item'>
            <Link to="#" className="nav__list-link">My Photo</Link>
          </li>
          <li className='nav__list-item'>
            <Link to="#" className="nav__list-link">News</Link>
          </li>
          <li className='nav__list-item'>
            <Link to="#" className="nav__list-link">Movie</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;