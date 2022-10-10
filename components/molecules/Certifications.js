import AccordionLayout from "../atoms/AccordionLayout";
import Image from "next/image";

const Certifications = ({accordIndex, activeIndex, setActiveIndex ,onClick}) => {
    return (
        <AccordionLayout title="Certifications"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={false}
                onClick={onClick}
    >
        <Image 
            src={"/images/Screenshot 2022-10-09 110023.png"}
            alt="Frontend Certificate From Nucamp"
            layout="fixed"
            width={20}
            height={20}
        />
    </AccordionLayout>
    )
}

export default Certifications