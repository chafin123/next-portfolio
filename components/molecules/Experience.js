/* eslint-disable react/jsx-no-comment-textnodes */
import AccordionLayout from './../atoms/AccordionLayout';
import experience from '../../shared/experiences.json'
import styles from '../../styles/Experience.module.css'
import Link from 'next/link';
const Experience = ({accordIndex, activeIndex, setActiveIndex, onClick}) => {
    return (
        <AccordionLayout title="Experience"
        accordIndex={accordIndex}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        flex={false}
        onClick={onClick}
    >
    <div className={styles.iconWrapper}>
        {experience.experiences.map((experience, index) => {
            return (
                <div key={index} className={styles.container}>
                    <Link href={'/experiences/' + experience.id}>
                        <div className={styles.text}>
                            <h2>
                            /*{experience.name}
                            </h2>
                        </div>
                    </Link>
                        <div className={styles.icons}>
                                <img 
                                    src={experience.image}
                                    alt={experience.name} 
                                    width={20}
                                    height={20}
                                />
                        </div>
                </div>
            )
        })}
    </div>
    </AccordionLayout>
    )
}

export default Experience