import langs from '../public/i18n/langs.json'
import {init, rememberLang} from '@codeborne/i18n-json'
import en from '../public/i18n/en.json'
import et from '../public/i18n/et.json'

export * from '@codeborne/i18n-json'

const defaultLang = 'et'

export async function initTranslations() {
  let lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]
  if (!lang) {
    rememberLang(defaultLang)
    lang = defaultLang
  }
  await init({langs, lang, defaultLang, dicts: {en, et}})
}