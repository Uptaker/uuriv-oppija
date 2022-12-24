import classNames from 'classnames'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import LangDropdown from '../components/LangDropdown'
import {_} from '@codeborne/i18n-json'

import s from './Nav.module.scss'

function Nav() {
  const [dropdown, setDropdown] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktop, setIsDektop] = useState<any>({
    matches: window.innerWidth > 1024 ? true : false
  })

  // Using media queries within React: https://stackoverflow.com/a/66590903
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDektop(e.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <nav className={s.navbar}>
      <Link to="/" className={classNames(s.navLink, s.navLogo)}>
        {_('title')}
      </Link>

      <ul className={classNames({[s.navMenu]: true, [s.navOpen]: isMenuOpen && !isDesktop})}>
        <li
          className={s.dropdownNav}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          onClick={() => {
            setDropdown(!dropdown)
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <div className={classNames(s.navLink, 'strategies')}>
            {_('nav.strategies')} {isDesktop && <i className="fas fa-caret-down"/>}
          </div>
          {(dropdown || !isDesktop) && <Dropdown/>}
        </li>
        <li>
          <Link to="/learn-more" className={s.navLink} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {_('nav.more')}
          </Link>
        </li>
        <li>
          <Link to="/elu" className={s.navLink} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {_('nav.ELU')}
          </Link>
        </li>
        <li
          className={s.dropdownNav}
          onMouseEnter={() => setLangDropdown(true)}
          onMouseLeave={() => setLangDropdown(false)}
          onClick={() => setLangDropdown(!langDropdown)}
        >
          <div className={classNames(s.navLink, 'strategies')}>
            <i className="fa-solid fa-globe"></i>
          </div>
          {langDropdown && <LangDropdown/>}
        </li>        
      </ul>
      <div className={classNames({[s.burgerMenu]: true, [s.open]: isMenuOpen})} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </nav>
  )
}

export default Nav