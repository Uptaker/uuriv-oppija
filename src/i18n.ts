import langs from '../i18n/langs.json'
import {init, rememberLang} from '@codeborne/i18n-json'
export * from '@codeborne/i18n-json'

const defaultLang = 'et'

export async function initTranslations() {
  let lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]
  if (!lang) {
    rememberLang(defaultLang)
    lang = defaultLang
  }
  await init({langs, lang, defaultLang})
}