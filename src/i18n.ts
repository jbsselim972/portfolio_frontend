import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const getCurrentHost =
    import.meta.env.MODE === 'development' ? 'http://localhost:5173' : 'https://www.jbsselim.com'

i18n.use(XHR)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        },
        debug: true,
    })

i18n.changeLanguage()

export default i18n
