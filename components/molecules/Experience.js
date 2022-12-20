import AccordionLayout from './../atoms/AccordionLayout';
import experience from '../../shared/experince.json'
import styles from '../../styles/Experience.module.css'
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
                    <div className={styles.icons}>
                        <img 
                            src={experience.image}
                            alt={experience.name} 
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className={styles.text}>
                        {experience.name}
                    </div>
                </div>
            )
        })}
    </div>
    </AccordionLayout>
    )
}

export default Experience