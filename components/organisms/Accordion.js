import styles from '../../styles/Accordion.module.css'
import { useState } from "react";
import Skills from "../molecules/Skills";
import Projects from "../molecules/Projects";
import Experience from "../molecules/Experience";
import Certifications from "../molecules/Certifications";
import About from "../molecules/About";
import Contact from "../molecules/Contact";
import Link from 'next/link';

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
            <div className="flex justify-between p-2 mt-2 rounded w-fit cursor-pointer">
                <Link href={'https://drive.google.com/uc?export=download&id=1QmMQG-sum78NxQaf1Gfz2Wa9-CXvTNt3'}>
                    <h2>Resume</h2>
                </Link>
            </div>
            <About 
                accordIndex={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
            <Contact 
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onClick={() => handleSetIndex(accordIndex)}
            />
        </div>
    )
}

export default Accordion;