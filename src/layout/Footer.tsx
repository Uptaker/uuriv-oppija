import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/ELU-Stamp.svg'
import logoEN from '../assets/ELU-Stamp-EN.svg'
import LangSelect from '../components/LangSelect'
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
        <p>{_('nav.contacts')}</p>
        <p>{_('nav.copyright')} {(new Date().getFullYear())} © {_('title')}</p>
        <LangSelect/>
      </div>
      <div className="logo-container">
        <img src={lang === 'en' ? logoEN : logo} alt={_('general.logo')}/>
      </div>
    </div>

  )
}

export default Footer