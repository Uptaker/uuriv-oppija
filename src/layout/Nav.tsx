import React, {useState} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown'

const Nav: React.FC = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
      setHover(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
      setHover(false);
    }
  };


  return (
    <>
      <nav className="navbar">
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Uuriv õppija

        </Link>
        <div className='menu_icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div

              className='nav-links'
              id='strateegiad'
              onClick={closeMobileMenu}

              style={hover ? {backgroundColor: "#FFEE93"} : {}}
            >
              Strateegiad <i className='fas fa-caret-down'/>
            </div>
            {dropdown && <Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link
              to='/lisaks'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Lisaks
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/elu'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ELU
            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
}
export default Nav