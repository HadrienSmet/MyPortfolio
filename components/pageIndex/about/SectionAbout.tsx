import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import DoubleImageContainer from "./DoubleImageContainer";
import DynamicLinkMyself from "./DynamicLinkMyself";
import DynamicLinkWork from "./DynamicLinkWork";
import { handleScrollToTop } from "../../../utils/handleScrollToTop";
import { useMyCursorContext } from "../../../context/CursorContext";

const SectionAbout = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    return (
        <section className="about" id="about">
            <div className="slope-container">
                <div className="left-slope"></div>
                <div className="right-slope"></div>
            </div>
            <FaAngleUp
                id="to-intro"
                onClick={handleScrollToTop}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="about__dynamic-links-container">
                <DynamicLinkWork />
                <DynamicLinkMyself />
            </div>
            <DoubleImageContainer />
            <a href="#contact" id="to-contact">
                <FaAngleDown
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </a>
        </section>
    );
};

export default SectionAbout;
