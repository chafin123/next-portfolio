import AccordionLayout from './../atoms/AccordionLayout';
import experience from '../../shared/experince.json'

const Experience = ({accordIndex, activeIndex, setActiveIndex, onClick}) => {
    return (
        <AccordionLayout title="Experience"
        accordIndex={accordIndex}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        flex={false}
        onClick={onClick}
    >
        {experience.experiences.map((experience, index) => {
            return (
                <div key={index}>
                    <img 
                        src={experience.image}
                        alt={experience.name} 
                        layout="intrinsic"
                        width={20}
                        height={20}
                    />
                </div>
            )
        })}
    </AccordionLayout>
    )
}

export default Experience