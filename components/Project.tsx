import Image from "next/image";
import { MouseEvent, MutableRefObject, useRef } from "react";
import { ProjectInterface } from "../interfaces/models";

type Props = {
    project: ProjectInterface;
};

const Project = ({ project }: Props) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const handlePictureTranslate = (
        element: MutableRefObject<HTMLImageElement | null> | null,
        event: MouseEvent
    ) => {
        console.log(event);
    };
    return (
        <div
            className="project"
            onMouseMove={(e) => handlePictureTranslate(imgRef, e)}
        >
            <Image
                src={"/img/" + project.imageLink}
                alt={"illustration du projet:" + project.name}
                width={500}
                height={500}
                ref={imgRef}
            />
            <div className="project-content">
                <h3>{project.name}</h3>
                <ul>
                    {project.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
                <a href={project.codeLink}>Voir le code</a>
            </div>
        </div>
    );
};

export default Project;
