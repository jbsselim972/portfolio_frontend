// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { urlFor, client } from "../../client";
import '@/styles/Skills.css'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { images, skills, workExperiences as experiences } from '@/constants'
import { formatRangeDate } from '@/utils/format'

const Skills = () => {
    const { t } = useTranslation()
    // const [experiences, setExperiences] = useState<any[]>([]);
    // const [skills, setSkills] = useState<any[]>([]);
    // useEffect(() => {
    //   // const query = '*[_type=="experiences"]';
    //   // const skillsQuery = '*[_type=="skills"]';
    //   // client.fetch(query).then((data) => {
    //   //   setExperiences(data);
    //   // });
    //   // client.fetch(skillsQuery).then((data) => {
    //   //   setSkills(data);
    //   // });
    // }, []);

    return (
        <>
            <h2 className="head-text">{t('skilltitle')}</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map(({ name, bgColor, icon, progress }) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={name}
                        >
                            <div
                                // progress-bar-${progress}
                                className={`app__flex progress-bar-${progress}`}
                                style={{ backgroundColor: bgColor }}
                            >
                                {/* <progress value="75" min="0" max="100"></progress> */}
                                <img src={images[icon as keyof typeof images]} alt={name} />
                            </div>
                            <p className="p-text">{name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience, index) => (
                        <motion.div className="app__skills-exp-item" key={experience.year}>
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works" key={index}>
                                {experience.works.map((work) => {
                                    const dateRange = formatRangeDate(work.dateFrom, work.dateTo)
                                    return (
                                        <>
                                            <motion.div
                                                whileInView={{ opacity: [0, 1] }}
                                                transition={{ duration: 0.5 }}
                                                className="app__skills-exp-work"
                                                // data-tooltip-id={work.key}
                                                // data-tooltip-content={work.description}
                                                key={work.key}
                                            >
                                                <h4 className="bold-text">
                                                    {t(`exp${index}_title`)}
                                                    {/* {work.name} */}
                                                </h4>
                                                <p className="p-text">
                                                    {t(`exp${index}_date`)}
                                                    {/* {work.company} - {dateRange} */}
                                                </p>
                                                <p className="p-text">
                                                    {t(`exp${index}_desc`)}
                                                    {/* {work.description} */}
                                                </p>
                                            </motion.div>
                                            {/* <ReactTooltip id={work.key} className="skills-tooltip" /> */}
                                        </>
                                    )
                                })}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills
