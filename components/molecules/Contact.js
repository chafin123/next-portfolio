import AccordionLayout from "../atoms/AccordionLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = ({accordIndex, activeIndex, setActiveIndex, onClick}) => {
   return (
    <AccordionLayout title="Contact"
                accordIndex={accordIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                flexLayout={true}
                onClick={onClick}
            >
                <div className="pr-4">
                    <a href="mailto: stevend.chafin@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="text-lime-500 h-[30px] hover:translate-y-[-4px] transtion-all duration-75 ease-in-out"/>
                    </a>
                </div>
                <div className="pr-4">
                    <a href="https://www.linkedin.com/in/steven-chafin-3174a1184/">
                        <FontAwesomeIcon icon={faLinkedin} className="text-lime-500 h-[30px] hover:translate-y-[-4px] transtion-all duration-75 ease-in-out"/>
                    </a>
                </div>
                <div className="">
                    <a href="https://github.com/chafin123">
                        <FontAwesomeIcon icon={faGithub} className="text-lime-500 h-[30px] hover:translate-y-[-4px] transtion-all duration-75 ease-in-out"/>
                    </a>
                </div>
            </AccordionLayout>
   )
}
export default Contact