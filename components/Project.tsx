import React from "react";
import Image from "next/image";
import { ProjectInterface } from "../interfaces/models";

type Props = {
    project: ProjectInterface;
};

const Project = ({ project }: Props) => {
    return (
        <div className="project">
            <h3>{project.name}</h3>
            <Image
                src={"/img/" + project.image}
                alt={"illustration du projet:" + project.name}
                width={100}
                height={100}
            />
            <p>{project.description}</p>
            <ul>
                {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
            <a href={project.codeLink}>Voir le code</a>
        </div>
    );
};

export default Project;
