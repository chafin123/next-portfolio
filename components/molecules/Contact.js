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
                <div>
                    <a href="mailto: stevend.chafin@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/steven-chafin-3174a1184/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/chafin123">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
            </AccordionLayout>
   )
}
export default Contact