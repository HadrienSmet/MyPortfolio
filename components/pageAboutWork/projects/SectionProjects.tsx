import { MouseEvent, useEffect, useState } from "react";
import { projects } from "../../../data/projectsData";
import ProjectCard from "./ProjectCard";

const useSectionProjects = () => {
    const [projectsToMap, setProjectsToMap] = useState(projects);
    const [filter, setFilter] = useState("");
    const handleFilter = (e: MouseEvent<HTMLLIElement>) => {
        const target = e.target as Element;
        setFilter(target.id);
    };
    const resetFilter = () => setFilter("");
    useEffect(() => {
        if (filter === "") {
            setProjectsToMap(projects);
        } else {
            const filteredProjects = projects.filter((el) =>
                el.tools.find((tool) => tool === filter)
            );
            setProjectsToMap(filteredProjects);
        }
    }, [filter]);

    return {
        projectsToMap,
        handleFilter,
        resetFilter,
    };
};

const SectionProjects = () => {
    const { projectsToMap, handleFilter, resetFilter } = useSectionProjects();

    return (
        <section className="about-work projects-side">
            <h2>My projects</h2>
            <div className="filters-container">
                <h3>Filter by languages</h3>
                <div className="filters-container__content">
                    <ul className="filters-container__tools-list">
                        <li id="HTML" onClick={handleFilter}>
                            HTML/CSS {"("}only{")"}
                        </li>
                        <li id="JavaScript" onClick={handleFilter}>
                            JavaScript
                        </li>
                        <li id="React" onClick={handleFilter}>
                            React
                        </li>
                        <li id="NodeJS" onClick={handleFilter}>
                            NodeJS
                        </li>
                        <li id="NextJS" onClick={handleFilter}>
                            NextJS
                        </li>
                        <li id="TypesScript" onClick={handleFilter}>
                            TypeScript
                        </li>
                    </ul>
                    <span onClick={resetFilter}>Réinitialiser les filtres</span>
                </div>
            </div>
            <div className="projects-container">
                {projectsToMap
                    .sort((a, b) => b.idInNumber - a.idInNumber)
                    .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
            </div>
        </section>
    );
};

export default SectionProjects;
