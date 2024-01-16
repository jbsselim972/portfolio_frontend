import i18n from 'i18next'
import i18nBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { resources } from '@/constants/languages'

i18n.use(i18nBackend)
    .use(initReactI18next)
    .init({
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: 'http://localhost:5173/i18n/{{lng}}.json',
        },
    })

export default i18n
