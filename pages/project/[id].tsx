import React, { useEffect } from "react";
import { ProjectInterface } from "../../interfaces/models";
import { projects } from "../../data/projectsData";
import CarouselPictures from "../../components/pageProject/CarouselPictures";
import Head from "next/head";
import PageProjectContent from "../../components/pageProject/PageProjectContent";

type Props = {
    project: ProjectInterface;
};

const useProject = () => {
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
};

const Project: React.FC<Props> = ({ project }: Props) => {
    useProject();
    return (
        <>
            <Head>
                <title>Hadrien Smet - {String(project.name)}</title>
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
                <PageProjectContent project={project} />
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
