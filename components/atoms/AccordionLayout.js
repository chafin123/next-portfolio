import styles from '../../styles/AccordionLayout.module.css'
const AccordionLayout = ({title, children, accordIndex, activeIndex, setActiveIndex, flexLayout}) => {
    
    const handleSetIndex = (accordIndex) => (activeIndex !== accordIndex ? setActiveIndex(accordIndex) : setActiveIndex(null) );
    return (
        <>
            <div onClick={() => handleSetIndex(accordIndex)} className="flex justify-between p-2 mt-2 rounded w-fit cursor-pointer">
                <div className="flex">
                    <div><h2>{title}</h2></div>
                </div>
            </div>
            <div className={(activeIndex === accordIndex ? styles.show : styles.noShow )} >
                <div className={styles[(flexLayout ? "accordionSkillBody" : "accordionBody")]}>
                    {children}
                </div>
            </div>
        </>    
    )
}

export default AccordionLayout