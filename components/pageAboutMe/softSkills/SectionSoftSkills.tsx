import {
    MdBrush,
    MdBuild,
    MdLightbulbOutline,
    MdSettings,
} from "react-icons/md";
const SectionSoftSkills = () => {
    return (
        <div className="soft-skills-side">
            <div className="about-me-page__list-container">
                <ul>
                    <li>
                        <span>
                            <MdSettings />
                            <MdSettings />
                            <MdSettings />
                        </span>
                        <span>Problem-solving</span>
                    </li>

                    <li>
                        <span>
                            <MdLightbulbOutline />
                        </span>
                        <span>Intuitive</span>
                    </li>
                    <li>
                        <span>
                            <MdBuild />
                        </span>
                        <span>Adaptability</span>
                    </li>
                    <li>
                        <span>
                            <MdBrush />
                        </span>
                        <span>Creativity</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SectionSoftSkills;
