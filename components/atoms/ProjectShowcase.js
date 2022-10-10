import Image from "next/image"
import styles from '../../styles/ProjectShowcase.module.css'

const ProjectShowcase = ({showCaseIndex,activeShowCaseIndex, setActiveShowCaseIndex, title,src,alt,height,width,writeup,techs}) => {
    
    const handleSetShowCaseIndex = (showCaseIndex) => (activeShowCaseIndex !== showCaseIndex ? setActiveShowCaseIndex(showCaseIndex) : setActiveShowCaseIndex(null) );
    
    return (
    <div>
        <div onClick={() => handleSetShowCaseIndex(showCaseIndex)}>
        <p>/*{title}</p>
        {(activeShowCaseIndex === showCaseIndex) && 
            <><div className={styles.projectTitle}>
                        {title}
                    </div><div className={styles.projectImage}>
                            <Image
                                src={src}
                                alt={alt}
                                layout="intrinsic"
                                height={height}
                                width={width} />
                        </div><div className={styles.projectWriteup}>
                            {writeup}
                        </div><div className={styles.projectTech}>
                            {techs.map((tech, index) => {
                                <div key={index} className={styles.pill}>
                                    {tech.name}
                                </div>;
                            })}
                        </div></>
                }
            </div>
    </div>
   )
}
export default ProjectShowcase