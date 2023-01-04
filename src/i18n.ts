import langs from '../public/i18n/langs.json'
import {init, Options, rememberLang} from '@codeborne/i18n-json'
import en from '../public/i18n/en.json'
import et from '../public/i18n/et.json'
import {BASE_URL} from '../config'

export * from '@codeborne/i18n-json'

const defaultLang = 'et'

export async function initTranslations() {
  let lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]
  if (!lang) {
    rememberLang(defaultLang)
    lang = defaultLang
  }

  let options: Options = {langs, lang, defaultLang}
  if (BASE_URL !== '/') options.dicts = {en, et}
  await init(options)
}