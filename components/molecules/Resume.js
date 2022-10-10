import AccordionLayout from "../atoms/AccordionLayout";

const Resume = ({accordIndex, activeIndex, setActiveIndex, onClick}) => {
    return (
        <AccordionLayout title="Resume"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={false}
                onClick={onClick}
            >

            </AccordionLayout>
    )
}
export default Resume