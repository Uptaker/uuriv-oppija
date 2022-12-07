import classNames from 'classnames'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown'

import s from './Nav.module.scss'

function Nav() {
  const [dropdown, setDropdown] = useState(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  };


  return (
    <>
      <nav className={s.navbar}>
        <Link to='/' className={classNames(s.navLink, s.navLogo)}>
          Uuriv õppija

        </Link>

        <ul className={s.navMenu}>

          <li
            className={s.dropdownNav}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className={classNames(s.navLink, 'strategies')}
            >
              Strateegiad <i className='fas fa-caret-down'/>
            </div>
            {dropdown && <Dropdown/>}
          </li>
          <li>
            <Link
              to='/learn-more'
              className={s.navLink}
            >
              Lisaks
            </Link>
          </li>
          <li>
            <Link
              to='/elu'
              className={s.navLink}
            >
              ELU
            </Link>
          </li>

        </ul>

      </nav>
    </>
  )
}
export default Nav