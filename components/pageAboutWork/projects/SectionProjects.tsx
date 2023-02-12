import { projects } from "../../../data/projectsData";
import ProjectCard from "./ProjectCard";

const SectionProjects = () => {
    return (
        <section className="about-work projects-side">
            <h2>My projects</h2>
            <div className="projects-container">
                {projects
                    .sort((a, b) => b.idInNumber - a.idInNumber)
                    .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
            </div>
        </section>
    );
};

export default SectionProjects;
