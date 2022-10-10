import AccordionLayout from "../atoms/AccordionLayout";
import ProjectShowcase from "../atoms/ProjectShowcase";
import { useState } from 'react';


const Projects = ({props, accordIndex, activeIndex, setActiveIndex ,onClick}) => {
    
    
    const [activeShowCaseIndex, setActiveShowCaseIndex] = useState(null);

    return (
        <AccordionLayout title="Projects"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={false}
                onClick={onClick}
            >
                 {props.props.projects.map((project, index) => {
                    return (
                        <div 
                            key={index} 
                            className="text-start self-start"
                        >

                        <ProjectShowcase
                                showCaseIndex={project.number}
                                activeShowCaseIndex={activeShowCaseIndex}
                                setActiveShowCaseIndex={setActiveShowCaseIndex}
                                title={project.name}
                                src={project.image}
                                alt={project.name}
                                height={100}
                                width={100}
                                writeup={project.writeup}
                                techs={project.techs}
                            />
                        </div>
                    )
                })}
            </AccordionLayout>
    )
}
export default Projects
