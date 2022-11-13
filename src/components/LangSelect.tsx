import {lang, langs, rememberLang} from '@codeborne/i18n-json'
import {useState} from 'react'

function LangSelect() {

  const [language, setLanguage] = useState(lang);

  function handleLangSelect(lang: string) {
    console.log(lang)
    setLanguage(lang)
    rememberLang(lang)
    location.reload()
  }

  return (
    <select value={language} onChange={e => handleLangSelect(e.target.value)}>
      {langs.map(lang => {
        return <option key={lang} value={lang}>{lang.toUpperCase()}</option>
      })}
    </select>
  )
}

export default LangSelect