import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/ELU-Stamp.svg'
import logoEN from '../assets/ELU-Stamp-EN.svg'
import {_} from '@codeborne/i18n-json'

import s from './Footer.module.scss'

function Footer() {
  const lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]

  return (
    <div className={s.footer}>
      <div className='info-container'>
        <p>
          <Link to='/' className={s.title}>
            {_('title')}
          </Link>
        </p>
        <p><a href="mailto:merike.saar@tlu.ee"><i className="fa-regular fa-envelope"/>  merike.saar@tlu.ee</a></p>
        <p>{_('nav.copyright')} {(new Date().getFullYear())} © {_('title')}</p>
      </div>
      <div className="logo-container">
        <img src={lang === 'en' ? logoEN : logo} alt={_('general.logo')}/>
      </div>
    </div>

  )
}

export default Footer