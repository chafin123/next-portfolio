import AccordionLayout from "../atoms/AccordionLayout";
import ProjectShowcase from "../atoms/ProjectShowcase";
import { useState } from 'react';
import projects from '../../shared/projects.json'
import Link from "next/link";
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
                 {projects.projects.map(project => {
                    return (
                        <Link 
                            key={project.id}
                            href={'/projects/' + project.id} 
                        >
                        <a className="text-start self-start">
                                <h2>/*{project.name}</h2>
                        </a>
                        </Link>
                    )
                })}
            </AccordionLayout>
    )
}
export default Projects
