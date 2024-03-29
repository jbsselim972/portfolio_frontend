import '@/styles/Header.css'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { images } from '@/constants'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
}

const Header = () => {
    const { t } = useTranslation()
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>&#128075;&#127998;</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">{t('presentation')}</p>
                            <h1 className="head-text">
                                Selim <p>JEAN-BAPTISTE-SIMONE</p>
                            </h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">{t('role1')}</p>
                        <p className="p-text">{t('role2')}</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.typescript, images.react, images.html].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Header
