import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/ELU-Stamp.svg'
import logoEN from '../assets/ELU-Stamp-EN.svg'
import illumine from '../assets/illumine.png'
import {_} from '@codeborne/i18n-json'

import s from './Footer.module.scss'

function Footer() {
  const lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]

  return (
    <div className={s.footer}>
      <div className={s.illumine}>
        <p>
          <Link to='/' className={s.title}>
            {_('title')}
          </Link>
        </p>
        <p><a href="mailto:merike.saar@tlu.ee"><i className="fa-regular fa-envelope"/>  merike.saar@tlu.ee</a></p>
        <p className={s.copyright}>{_('nav.illumine')}</p>
        <a href="https://illumine.upf.edu/" target="_blank"><img src={illumine} /></a>
        <p className={s.copyright}>{_('nav.copyright')} {(new Date().getFullYear())} © {_('title')}</p>
      </div>
      <div>
        <img src={lang === 'en' ? logoEN : logo} alt={_('general.logo')}/>
      </div>
    </div>
  )
}

export default Footer