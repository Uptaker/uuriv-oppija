import {lang, langs, rememberLang} from '@codeborne/i18n-json'

function LangSelect() {

  function handleLangSelect(lang: string) {
    rememberLang(lang)
    location.reload()
  }

  return (
    <select value={lang} onChange={e => handleLangSelect(e.target.value)}>
      {langs.map(lang => <option key={lang} value={lang}>{lang.toUpperCase()}</option>)}
    </select>
  )
}

export default LangSelect