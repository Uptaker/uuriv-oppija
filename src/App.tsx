import { useState } from 'react'
import './App.css'
import {_} from '@codeborne/i18n-json'
import LangSelect from './components/LangSelect'

function App() {
  return (
    <div className="App">
      <LangSelect/>
      <p>{(_('title'))}</p>
    </div>
  )
}

export default App
