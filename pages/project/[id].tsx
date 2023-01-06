import React from "react";
import Image from "next/image";
import { ProjectInterface } from "../../interfaces/models";
import { projects } from "../../projectsData";
import MuiGradientBorder from "../../components/MuiGradientBorder";
import { useMyCursorContext } from "../../components/CursorContext";

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
            <div className="project-page__content">
                <h1>{project.name}</h1>
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
            <Image
                src={"/img/" + project.image}
                alt={"Screenshoot du projet " + project.name}
                width={700}
                height={700}
            />
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
