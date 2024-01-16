import '@/styles/Navbar.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/UI/select'
import { images } from '@/constants'
import { LANGUAGES } from '@/constants/languages'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [currentLang, setCurrentLang] = useState(LANGUAGES[0].code)
    const { i18n, t } = useTranslation()

    useEffect(() => {
        try {
            i18n.changeLanguage(currentLang)
        } catch (error) {
            console.error(error)
        }
    }, [currentLang, i18n])

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="#home">
                    <img src={images.logo} alt="logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <a href={`#${item}`}>{t(item)}</a>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [200, 0] }}
                        transition={{ duration: 0.85, ease: 'easeInOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <Select defaultValue={currentLang} onValueChange={setCurrentLang}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent className="flex">
                                {LANGUAGES.map((lang) => (
                                    <SelectItem value={lang.code} key={lang.code}>
                                        <span className="flex gap-x-2 items-center justify-center">
                                            {lang.label} {<lang.icon className="w-4 h-4" />}
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <ul>
                            {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                                <li key={item}>
                                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                                        {t(item)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
            <div className="app__navbar-select-lang hidden md:flex">
                <Select defaultValue={currentLang} onValueChange={setCurrentLang}>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent className="flex">
                        {LANGUAGES.map((lang) => (
                            <SelectItem value={lang.code} key={lang.code}>
                                <span className="flex gap-x-2 items-center justify-center">
                                    {lang.label} {<lang.icon className="w-4 h-4" />}
                                </span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </nav>
    )
}

export default Navbar
