import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { ProjectInterface } from "../interfaces/models";

type Props = {
    project: ProjectInterface;
};

const Project: React.FC<Props> = ({ project }: Props) => {
    const [isHover, setIsHover] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouseEnter = () => {
        setIsHover(() => true);
    };
    const handleMouseLeave = () => {
        setIsHover(() => false);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
            const rightImageElement = document.querySelector<HTMLImageElement>(
                `#illuprojet-${project.id}`
            );
            const rect = imgRef.current?.getBoundingClientRect();
            if (rect !== undefined) {
                console.log(imgRef.current?.id);
                const index = imgRef.current?.id.split("-")[1];
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ratioX = -(x / rect.width) * 20 + 10;
                const ratioY = -(y / rect.height) * 20 + 10;
                if (rightImageElement !== null) {
                    rightImageElement.style.setProperty(
                        `--img${index}-trans-x`,
                        `${ratioX}px`
                    );
                    rightImageElement.style.setProperty(
                        `--img${index}-trans-y`,
                        `${ratioY}px`
                    );
                }
            }
        };
        if (isHover) {
            window.addEventListener(
                "mousemove",
                handleMouseMove as EventListener
            );

            return () => {
                window.removeEventListener(
                    "mousemove",
                    handleMouseMove as EventListener
                );
            };
        }
    }, [isHover, project.id]);

    return (
        <div
            className="project"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={"/img/" + project.imageLink}
                alt={"illustration du projet:" + project.name}
                width={500}
                height={500}
                ref={imgRef}
                id={`illuprojet-${project.id}`}
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
