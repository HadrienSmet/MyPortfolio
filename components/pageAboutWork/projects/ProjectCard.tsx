import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProjectInterface } from "../../../interfaces/models";
import { useMyCursorContext } from "../../../context/CursorContext";
import { useWindowSize } from "../../../hooks/useWindowSize";

type Props = {
    project: ProjectInterface;
};

const useProjectCard = ({ project }: Props) => {
    const [screenWidth, setScreenWidth] = useState<number | undefined>(
        undefined
    );
    const [isHover, setIsHover] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [, setIsCursorHover] = useMyCursorContext();
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width === undefined) {
            setScreenWidth(window.innerWidth);
        } else {
            setScreenWidth(windowSize.width);
        }
    }, [windowSize.width]);

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
        containerRef.current!.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current!.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midOfWidth = rect.width / 2;
            const midOfHeight = rect.height / 2;
            const angleY = -((x - midOfWidth) / 8);
            const angleX = (y - midOfHeight) / 8;
            containerRef.current!.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        };
        let card = containerRef.current;
        if (screenWidth && screenWidth >= 1025) {
            if (isHover) {
                window.addEventListener("mousemove", handleMouseMove);

                return () => {
                    card!.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
                    window.removeEventListener("mousemove", handleMouseMove);
                };
            }
        }
    }, [isHover, project.id, screenWidth]);

    return {
        containerRef,
        imgRef,
        handleMouseEnter,
        handleMouseLeave,
        handleCursorEnter,
        handleCursorLeave,
    };
};

const ProjectCard = ({ project }: Props) => {
    const {
        containerRef,
        imgRef,
        handleMouseEnter,
        handleMouseLeave,
        handleCursorEnter,
        handleCursorLeave,
    } = useProjectCard({
        project,
    });

    return (
        <div
            ref={containerRef}
            className="project"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                priority
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
                <Link
                    href={"/project/" + project.id}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                >
                    See more
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
