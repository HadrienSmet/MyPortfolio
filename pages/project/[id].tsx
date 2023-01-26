import React, { useEffect } from "react";
import { ProjectInterface } from "../../interfaces/models";
import { projects } from "../../data/projectsData";
import MuiGradientBorder from "../../components/mui/MuiGradientBorder";
import { useMyCursorContext } from "../../context/CursorContext";
import CarouselPictures from "../../components/pageProject/CarouselPictures";
import Head from "next/head";

type Props = {
    project: ProjectInterface;
};

const useProject = () => {
    const [, setIsCursorHover] = useMyCursorContext();
    const handleCursorEnter = () => {
        setIsCursorHover(true);
    };
    const handleCursorLeave = () => {
        setIsCursorHover(false);
    };

    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        const listEl =
            isBrowser && (document.querySelector(".tools-used") as Element);

        const options = {
            root: null,
            threshold: 0.5,
            rootMargin: "0px",
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);
        if (listEl !== false) observer.observe(listEl);
    }, []);

    return {
        handleCursorEnter,
        handleCursorLeave,
    };
};

const Project: React.FC<Props> = ({ project }: Props) => {
    const { handleCursorEnter, handleCursorLeave } = useProject();
    return (
        <>
            <Head>
                <title>Hadrien Smet - {project.name}</title>
                <meta name="description" content={project.description} />
                <meta name="robots" content="index, follow"></meta>
                <link rel="shortcut icon" href="../favicon.ico" />
            </Head>
            <section className="project-page">
                <h1>{project.name}</h1>
                <div className="project-page__carousel-area">
                    <CarouselPictures project={project} />
                    <em>Click on the image to see it in its full size</em>
                </div>
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
                            <a href={project.codeLink}>Voir le code</a>
                        </MuiGradientBorder>
                    </div>
                    {project.link && <a href={project.link}>Voir le site</a>}
                </div>
            </section>
        </>
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
