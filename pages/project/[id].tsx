import React from "react";
import { ProjectInterface } from "../../interfaces/models";
import { projects } from "../../projectsData";
import MuiGradientBorder from "../../components/MuiGradientBorder";
import { useMyCursorContext } from "../../components/CursorContext";
import CarouselPictures from "../../components/CarouselPictures";

type Props = {
    project: ProjectInterface;
};

const Project: React.FC<Props> = ({ project }: Props) => {
    const [, setIsCursorHover] = useMyCursorContext();
    const handleCursorEnter = () => {
        setIsCursorHover(true);
    };
    const handleCursorLeave = () => {
        setIsCursorHover(false);
    };
    return (
        <section className="project-page">
            <h1>{project.name}</h1>
            <div className="project-page__carousel-area">
                <CarouselPictures project={project} />
                <em>Click on the image to see it in its full size</em>
            </div>
            <div className="project-page__content">
                <p>{project.description}</p>
                <ul>
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
                        <a href={project.codeLink}>Voir le code</a>
                    </MuiGradientBorder>
                </div>
                {project.link && <a href={project.link}>Voir le site</a>}
            </div>
        </section>
    );
};

export default Project;

export const getStaticPaths = async () => {
    const paths = projects.map((project) => `/project/${project.id}`);
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({
    params,
}: {
    params: Record<string, string>;
}) => {
    const project = projects.find((p) => p.id === params.id);
    return {
        props: {
            project,
        },
    };
};