import styles from '../../styles/Accordion.module.css'
import { useState } from "react";
import Skills from "../molecules/Skills";
import Projects from "../molecules/Projects";
import Experience from "../molecules/Experience";
import Certifications from "../molecules/Certifications";
import Resume from "../molecules/Resume";
import About from "../molecules/About";
import Contact from "../molecules/Contact";

const Accordion = () => {
    
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="flex flex-col justify-start items-start w-full">
            <Projects
                accordIndex={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
            <Skills 
                accordIndex={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
            <Experience 
                accordIndex={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
            <Certifications 
                accordIndex={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
            <Resume 
                accordIndex={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
            <About 
                accordIndex={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
            <Contact 
                index={7}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
        </div>
    )
}

export default Accordion;