import DoubleImageContainer from "./DoubleImageContainer";
import DynamicLinkMyself from "./DynamicLinkMyself";
import DynamicLinkWork from "./DynamicLinkWork";

const SectionAbout = () => {
    return (
        <section className="about">
            <div className="about__dynamic-links-container">
                <DynamicLinkWork />
                <DynamicLinkMyself />
            </div>
            <DoubleImageContainer />
        </section>
    );
};

export default SectionAbout;
