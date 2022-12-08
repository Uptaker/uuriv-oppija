import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/ELU-Stamp.svg'
import LangSelect from '../components/LangSelect'
import {_} from '@codeborne/i18n-json'

import s from './Footer.module.scss'

function Footer() {
  return (
    <div className={s.footer}>
      <div className='info-container'>
        <p>
          <Link to='/' className={s.title}>
            Uuriv õppija
          </Link>
        </p>
        <p>Siia märgime vajadusel kontaktandmed</p>
        <p>Copyright {(new Date().getFullYear())} © Uuriv õppija</p>
      </div>
      <LangSelect/>
      <div className="logo-container">
        <img src={logo} alt="Erialasid lõimiv Uuendus"/>
      </div>
    </div>

  )
}

export default Footer