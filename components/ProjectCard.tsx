import Link from "next/link";
import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { ProjectInterface } from "../interfaces/models";
import { useMyCursorContext } from "./CursorContext";

type Props = {
    project: ProjectInterface;
};

const ProjectCard = ({ project }: Props) => {
    const [isHover, setIsHover] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const [, setIsCursorHover] = useMyCursorContext();
    const handleCursorEnter = () => {
        setIsCursorHover(true);
    };
    const handleCursorLeave = () => {
        setIsCursorHover(false);
    };

    const handleMouseEnter = () => {
        setIsHover(() => true);
    };
    const handleMouseLeave = () => {
        setIsHover(() => false);
    };

    //I give up I can not find a solution for this "No overload matches this call" (ts 2769) so I put an any type..
    useEffect(() => {
        const handleMouseMove: any = (e: MouseEvent) => {
            const rightImageElement = document.querySelector<HTMLImageElement>(
                `#illuprojet-${project.id}`
            );
            const rect = imgRef.current?.getBoundingClientRect();
            if (rect !== undefined) {
                const index = imgRef.current?.id.split("-")[1];
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ratioX = -(x / rect.width) * 40 + 20;
                const ratioY = -(y / rect.height) * 40 + 20;

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
            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
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
                <Link
                    href={"/project/" + project.id}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                >
                    En savoir plus
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;