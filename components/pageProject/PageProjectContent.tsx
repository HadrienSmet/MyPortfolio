import React from "react";
import { useMyCursorContext } from "../../context/CursorContext";
import { ProjectInterface } from "../../interfaces/models";
import MuiGradientBorder from "../mui/MuiGradientBorder";

type Props = {
    project: ProjectInterface;
};

const usePageProjectContent = () => {
    const [, setIsCursorHover] = useMyCursorContext();
    const handleCursorEnter = () => {
        setIsCursorHover(true);
    };
    const handleCursorLeave = () => {
        setIsCursorHover(false);
    };

    return {
        handleCursorEnter,
        handleCursorLeave,
    };
};

const PageProjectContent = ({ project }: Props) => {
    const { handleCursorEnter, handleCursorLeave } = usePageProjectContent();

    return (
        <div className="project-page__content">
            <p>{project.description}</p>
            <ul className="tools-used">
                {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
            <div
                className="project-page__content__btn-container"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
            >
                <MuiGradientBorder>
                    <a href={project.codeLink}>See the code</a>
                </MuiGradientBorder>
                {project.codeServerLink && (
                    <MuiGradientBorder>
                        <a href={project.codeServerLink}>See the server code</a>
                    </MuiGradientBorder>
                )}
                {project.link && (
                    <MuiGradientBorder>
                        <a href={project.link}>Visit the website</a>
                    </MuiGradientBorder>
                )}
            </div>
        </div>
    );
};

export default PageProjectContent;
