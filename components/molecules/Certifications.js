/* eslint-disable react/jsx-no-comment-textnodes */
import AccordionLayout from "../atoms/AccordionLayout";
import Image from "next/image";
import Link from "next/link";
import certifications from '../../shared/certifactions.json'

const Certifications = ({accordIndex, activeIndex, setActiveIndex ,onClick}) => {
    return (
        <AccordionLayout title="Certifications"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={false}
                onClick={onClick}
    >
        {certifications.certifactions.map((cert, index) => {
            return (

        <Link key={index} href={'/certifactions/' + cert.id}>
            <h3 className="text-start">/*{cert.alt}</h3>
        </Link>
            )})}
    </AccordionLayout>
    )
}

export default Certifications