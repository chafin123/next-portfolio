/* eslint-disable react/jsx-no-comment-textnodes */
import AccordionLayout from "../atoms/AccordionLayout";
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
                                <h3>/*{project.name}</h3>
                        </a>
                        </Link>
                    )
                })}
            </AccordionLayout>
    )
}
export default Projects
