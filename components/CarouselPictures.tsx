import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { ProjectInterface } from "../interfaces/models";

type Props = {
    project: ProjectInterface;
};

const CarouselPictures = ({ project }: Props) => {
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
        const imgWidth = window.innerWidth - 875;
        const options = {
            top: 0,
            left: posIndex * imgWidth,
        };
        carouselContentRef.current?.scrollTo(options);
    }, [posIndex]);

    return (
        <div className="pictures-carousel__container">
            <span
                ref={previousBtnRef}
                className="pictures-carousel__btn previous"
                onClick={handleCarouselLeftTranslationX}
            >
                <FaAngleLeft />
            </span>
            <div
                className="pictures-carousel__content"
                ref={carouselContentRef}
            >
                {project.images.map((image, index) => (
                    <div
                        className="pictures-carousel__img-container"
                        key={index}
                    >
                        <Image
                            src={"/img/" + image}
                            alt={"Screenshoot du projet " + project.name}
                            width={700}
                            height={700}
                        />
                        <div className="pictures-carousel__legend-container">
                            {project.legends[index]}
                        </div>
                    </div>
                ))}
            </div>
            <span
                ref={nextBtnRef}
                className="pictures-carousel__btn next"
                onClick={handleCarouselRightTranslationX}
            >
                <FaAngleRight />
            </span>
        </div>
    );
};

export default CarouselPictures;
