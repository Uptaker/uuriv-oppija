import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import logo from '../assets/ELU-Stamp.svg'
import LangSelect from '../components/LangSelect'

const Footer = () => {
  return (
    <div className="footer">
      <div className='info-container'>
        <Link to='/' className='logo'>
          Uuriv õppija
        </Link>
        <div>Siia märgime vajadusel kontaktandmed</div>
        <div>Copyright 2022 © Uuriv õppija</div>
      </div>
      <LangSelect/>
      <div className="logo-container">
        <img src={logo} alt="Erialasid lõimiv Uuendus"/>
      </div>
    </div>

  )
}

export default Footer