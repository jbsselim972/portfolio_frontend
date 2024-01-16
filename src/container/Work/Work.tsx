import '@/styles/Work.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillEye, AiFillGithub, AiOutlineInfoCircle } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'

import InfoModal from '@/components/Modals/InfoModal'
// import { urlFor, client } from "../../client";
import { images, projects } from '@/constants'

const Work = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState({})
    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState<{
        y: number
        opacity: number
    }>({ y: 0, opacity: 1 })
    const [works, setWorks] = useState<any[]>([])
    const [filterWork, setFilterWork] = useState<any[]>([])

    useEffect(() => {
        const tobeChanged = projects
        // const query = '*[_type=="works"]';
        // client.fetch(query).then((data) => {
        setWorks(tobeChanged)
        setFilterWork(tobeChanged)
        // });
    }, [])

    const showModal = (id: any) => {
        setIsOpen({ ...isOpen, [id]: true })
    }

    const closeModal = (id: any) => {
        setIsOpen({ ...isOpen, [id]: false })
    }

    const handleWorkFilter = (item: any) => {
        setActiveFilter(item)
        setAnimateCard({ y: 100, opacity: 0 })
        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 })
            if (item === 'All') {
                setFilterWork(works)
            } else {
                setFilterWork(
                    works.filter((work) =>
                        work.tags.includes(
                            item
                                .toLowerCase()
                                .replace(/\s/g, '')
                                .replace(/[^a-zA-Z0-9]+/g, '')
                        )
                    )
                )
            }
        })
    }

    return (
        <>
            <h2 className="head-text">
                My <span>Portfolio</span> section
            </h2>

            <div className="app__work-filter">
                {[
                    'All',
                    'Frontend',
                    'Full-Stack',
                    'E-commerce',
                    // "Mobile App",
                    'UI/UX',
                ].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${
                            activeFilter === item ? 'item-active' : ''
                        }`}
                    >
                        {t(item)}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={images[work.imgUrl as keyof typeof images]} alt={work.name} />
                            <Tooltip id="demo" place="top" className="cards-tooltip" />
                            <Tooltip id="github" place="top" className="cards-tooltip" />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{
                                    duration: 0.25,
                                    ease: 'easeInOut',
                                    staggerChildren: 0.5,
                                }}
                                className="app__work-hover app__flex"
                            >
                                <a
                                    href={work.projectLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-tooltip-id="demo"
                                    data-tooltip-content="See demo"
                                >
                                    <motion.div
                                        whileHover={{ scale: [0, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a
                                    href={work.codeLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-tooltip-id="github"
                                    data-tooltip-content="See repository"
                                >
                                    <motion.div
                                        whileHover={{ scale: [0, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <InfoModal work={work} isOpen={isOpen} closeModal={closeModal} />

                            <Tooltip id="infos" place="top" className="cards-tooltip" />
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {work.description.length > 52
                                    ? work.description.substring(0, 52) + '...'
                                    : work.description}
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                            <div className="app__work-info app__flex">
                                <AiOutlineInfoCircle
                                    key={work.imgUrl}
                                    data-tooltip-id="infos"
                                    data-tooltip-content="See more"
                                    onClick={() => showModal(work.id)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default Work
