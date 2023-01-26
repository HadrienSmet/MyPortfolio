import { FaGitAlt } from "react-icons/fa";
import SvgCSS from "../../../assets/svg/SvgCSS";
import SvgFigma from "../../../assets/svg/SvgFigma";
import SvgHTML from "../../../assets/svg/SvgHTML";
import SvgJavaScript from "../../../assets/svg/SvgJavaScript";
import SvgMongoDB from "../../../assets/svg/SvgMongoDB";
import SvgNextJS from "../../../assets/svg/SvgNextJS";
import SvgNodeJS from "../../../assets/svg/SvgNodeJS";
import SvgReact from "../../../assets/svg/SvgReact";
import SvgSass from "../../../assets/svg/SvgSass";
import SvgThreeJS from "../../../assets/svg/SvgThreeJS";
import SvgTypeScript from "../../../assets/svg/SvgTypeScript";
import SvgVsCode from "../../../assets/svg/SvgVsCode";
import { projects } from "../../../data/projectsData";
import ProjectCard from "./ProjectCard";

const SectionProjects = () => {
    return (
        <section className="about-work about-work__projects-and-tools-section">
            <div className="about-work__tools-side">
                <h2>My tools</h2>
                <div className="about-work__tools-container">
                    <SvgHTML />
                    <SvgCSS />
                    <SvgSass />
                    <SvgJavaScript />
                    <SvgTypeScript />
                    <SvgNodeJS />
                    <SvgMongoDB />
                    <SvgReact />
                    <SvgNextJS />
                    <SvgThreeJS />
                    <FaGitAlt />
                    <SvgVsCode />
                    <SvgFigma />
                </div>
            </div>
            <div className="about-work__projects-side">
                <h2>My projects</h2>
                <div className="about-work__projects-container">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionProjects;
