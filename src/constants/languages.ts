import { FR, US } from 'country-flag-icons/react/3x2'

export const LANGUAGES = [
    { label: 'Français', code: 'fr-FR', icon: FR },
    { label: 'English', code: 'en-US', icon: US },
]

export const resources = {
    en: {
        translation: {
            title: "Selim's Portfolio",
            label: 'Select another language!',
            about: 'About',
            home: 'Home',
            work: 'Work',
            skills: 'Skills',
            en: 'English',
        },
    },
    fr: {
        translation: {
            title: 'Portfolio de Selim',
            label: 'Selectionnez un autre langage',

            about: 'A propos',
            home: 'Home',
            work: 'Projets',
            skills: 'Compétences',
            fr: 'Français',
        },
    },
}
