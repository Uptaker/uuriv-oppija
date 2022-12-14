import classNames from 'classnames'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import {_} from '@codeborne/i18n-json'

import s from './Nav.module.scss'

function Nav() {
  const [dropdown, setDropdown] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  // @ts-ignore
  return (
    <nav className={s.navbar}>
      <Link to='/' className={classNames(s.navLink, s.navLogo)}>
      {_('title')}
      </Link>

      <div>
        <ul className={classNames({[s.navMenu]: true, [s.navOpen]: isOpen})}>
          <li
            className={s.dropdown}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            onClick={() => setDropdown(!dropdown)}
          >
            <div className={classNames(s.navLink, 'strategies')}>
              {_('nav.strategies')} <i className='fas fa-caret-down'/>
            </div>
            {dropdown && <Dropdown/>}
          </li>
          <li>
            <Link to='/learn-more' className={s.navLink}>
              {_('nav.more')}
            </Link>
          </li>
          <li>
            <Link to='/elu' className={s.navLink}>
              {_('nav.ELU')}
            </Link>
          </li>
        </ul>
        <div className={classNames({
          [s.burgerMenu]: true,
          [s.burgerOpen]: !isOpen,
          [s.burgerClosed]: isOpen,
        })}
         onClick={() => setIsOpen(!isOpen)}/>
      </div>


    </nav>
  )
}
export default Nav