import AccordionLayout from './../atoms/AccordionLayout';
import skills from '../../shared/skills.json'
import styles from '../../styles/Skills.module.css'
const Skills = ({accordIndex, activeIndex, setActiveIndex, onClick}) => {
    return (
        <AccordionLayout title="Skills"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={true}
                onClick={onClick}
            >
                {skills.skills.map((skill,index) => {
                    return  ( 
                        <div key={index} >
                            <div className={`${styles[skill.type]} ${styles.skillPill}`}>
                                <p className={styles.skillText}>{skill.name}</p>
                            </div>
                        </div>
                    )
                })}
            </AccordionLayout>
    )
}

export default Skills