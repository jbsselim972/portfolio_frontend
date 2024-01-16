// import { motion } from "framer-motion";
// import { urlFor, client } from "../../client";
import '@/styles/About.css'

import { Trans, useTranslation } from 'react-i18next'

import { images } from '@/constants'

const About = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="app__profile-item">
                <div className="app__profile-img">
                    <img src={images['aboutme']} alt="profile" />
                </div>
                <div className="app__profile-content">
                    <h1>{t("aboutmetitle")}</h1>
                    <div className="p-text">
                        <Trans
                            i18nKey="aboutme1"
                            components={{ p: <p />, span: <span />, a: <a /> }}
                        >
                          
                          Hello, my name is <span>Selim JEAN-BAPTISTE-SIMONE</span>, a <span>passionate and creative</span> fullstack web developer currently working at RICOH FRANCE.<br /><p>With several years of experience, I specialize in building robust and scalable web applications. I have expertise in various technologies.<br />My approach to development focuses on creating<span>seamless and intuitive</span> userexperiences. I strongly believe in following best development practices, resulting in <span>clean, well-structured, and maintainable code</span>.<br />Throughout my career, I have had the opportunity to work on <span>multiple <a href='#skills'>projects</a></span>, ranging from dynamic website design to complex web applications. I have gained valuable experience in managing the entire development lifecycle, from <span>initial design to production deployment and maintenance</span>.</p>
                          <p>I am constantly staying <span>up-to-date with the latest trends</span> and technologies in the web development field. Continuous learning is a priority for me to ensure that I maintain my skills and provide the best solutions to my clients.</p><br /><p>I invite you to explore my portfolio to discover some of the <span> exciting projects</span> I have worked on my spare time. You will find <span><a href='#work'>demonstrations</a> of my technical skills</span> and my <a href='#contact'>contact</a> information </p><br/><p>Feel free to contact me to discuss your ideas and web development needs.</p>
                        </Trans>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
