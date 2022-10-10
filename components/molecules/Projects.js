import AccordionLayout from "../atoms/AccordionLayout";
import projects from '../../shared/projects.json'
import React, { useState } from 'react';


const Projects = ({accordIndex, activeIndex, setActiveIndex ,onClick}) => {

    return (
        <AccordionLayout title="Projects"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={false}
                onClick={onClick}
            >
                {projects.projects.map((project, index) => {
                    return (
                        <div 
                            key={index} 
                            className="text-start self-start"
                        >
                            <button type="button" data-bs-toggle="modal" data-bs-target={`#${project.name}modal`}  className="text-black font-mono">/*{project.name}</button>
                            
                        </div>
                    )
                })}
            </AccordionLayout>
    )
}
export default Projects
