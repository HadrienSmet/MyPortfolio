import { FaGitAlt } from "react-icons/fa";
import SvgVsCode from "./SvgVsCode";
import SvgHTML from "./SvgHTML";
import SvgCSS from "./SvgCSS";
import SvgSass from "./SvgSass";
import SvgTypeScript from "./SvgTypeScript";
import SvgJavaScript from "./SvgJavaScript";
import SvgNodeJS from "./SvgNodeJS";
import SvgMongoDB from "./SvgMongoDB";
import SvgReact from "./SvgReact";
import SvgNextJS from "./SvgNextJS";
import SvgThreeJS from "./SvgThreeJS";
import SvgFigma from "./SvgFigma";
import { projects } from "../projectsData";
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
