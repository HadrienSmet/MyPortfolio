import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { projects } from "../projectsData";
import Project from "./Project";

const CarouselProjects = () => {
    const [posIndex, setPosIndex] = useState(0);
    const previousBtnRef = useRef<HTMLDivElement | null>(null);
    const nextBtnRef = useRef<HTMLDivElement | null>(null);
    const carouselContentRef = useRef<HTMLDivElement | null>(null);
    const handleCarouselLeftTranslationX = () => {
        setPosIndex((curr) => curr - 1);
    };
    const handleCarouselRightTranslationX = () => {
        setPosIndex((curr) => curr + 1);
    };

    useEffect(() => {
        const options = {
            top: 0,
            left: posIndex * 675,
        };
        carouselContentRef.current?.scrollTo(options);
    }, [posIndex]);

    return (
        <div className="projects-carousel__container">
            <span
                ref={previousBtnRef}
                className="projects-carousel__btn previous"
                onClick={handleCarouselLeftTranslationX}
            >
                <FaAngleLeft />
            </span>
            <div
                className="projects-carousel__content"
                ref={carouselContentRef}
            >
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
            <span
                ref={nextBtnRef}
                className="projects-carousel__btn next"
                onClick={handleCarouselRightTranslationX}
            >
                <FaAngleRight />
            </span>
        </div>
    );
};

export default CarouselProjects;
