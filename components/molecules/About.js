import AccordionLayout from "../atoms/AccordionLayout";

const About = ({accordIndex, activeIndex, setActiveIndex, onClick}) => {
    return (
        <AccordionLayout title="About"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={false}
                onClick={onClick}
            >
                <p className="text-start">I am a digital native, savy in all things tech. If I do not know something I know how to figure it out, AKA Google it. I am always figuring out how to do my job more efficiently and effectively I am a classical nerd, love all things Star Trek, Lord of the Rings, sci-fi and fantasy. My hobbies include, Magic The Gathering, Dungeons & Dragons, Warhammer, boardgames, video games, reading, and coding. I was born in Wrangell, Alaska, a beautiful South-East Alaskan town on an island.</p>
            </AccordionLayout>
    )
}
export default About