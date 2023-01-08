import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { ProjectInterface } from "../interfaces/models";
import { useMyCursorContext } from "./CursorContext";

type Props = {
    project: ProjectInterface;
};

const CarouselPictures = ({ project }: Props) => {
    const [posIndex, setPosIndex] = useState(0);
    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);
    const previousBtnRef = useRef<HTMLDivElement | null>(null);
    const nextBtnRef = useRef<HTMLDivElement | null>(null);
    const carouselContentRef = useRef<HTMLDivElement | null>(null);
    const [, setIsCursorHover] = useMyCursorContext();
    const handleCursorEnter = () => {
        setIsCursorHover(true);
    };
    const handleCursorLeave = () => {
        setIsCursorHover(false);
    };

    const handleCarouselLeftTranslationX = () => {
        if (posIndex > 0) {
            setPosIndex((curr) => curr - 1);
        }
    };
    const handleCarouselRightTranslationX = () => {
        if (posIndex < project.images.length - 1) {
            setPosIndex((curr) => curr + 1);
        }
        if (posIndex === project.images.length - 1) {
            handleNextState(true);
        }
    };

    const handlePreviousState = (bool: boolean) => {
        setIsFirst(() => bool);
    };
    const handleNextState = (bool: boolean) => {
        setIsLast(() => bool);
    };

    useEffect(() => {
        const imgWidth = window.innerWidth - 675;
        const options = {
            top: 0,
            left: posIndex * imgWidth,
        };
        carouselContentRef.current?.scrollTo(options);

        console.log(posIndex);
        console.log(project.images.length - 1);

        if (posIndex === 0) {
            handlePreviousState(true);
            handleNextState(false);
            // } else if (posIndex < project.images.length - 1) {
            //     handleNextState(false);
        } else if (posIndex === project.images.length - 1) {
            console.log("you did it");
            handlePreviousState(false);
            handleNextState(true);
        } else {
            handlePreviousState(false);
            handleNextState(false);
        }
        if (nextBtnRef.current !== null) {
            if (isLast) nextBtnRef.current.style.opacity = "0";
            if (!isLast) nextBtnRef.current.style.opacity = "1";
        }
        if (previousBtnRef.current !== null) {
            if (isFirst) previousBtnRef.current.style.opacity = "0";
            if (!isFirst) previousBtnRef.current.style.opacity = "1";
        }
    }, [posIndex, isLast, isFirst, project.images.length]);

    return (
        <div className="pictures-carousel__container">
            <span
                ref={previousBtnRef}
                className="pictures-carousel__btn previous"
                onClick={handleCarouselLeftTranslationX}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
            >
                <div className="pictures-carousel__btn-container">
                    <FaAngleLeft className="active" />
                    <FaAngleLeft />
                </div>
            </span>
            <div
                className="pictures-carousel__content"
                ref={carouselContentRef}
            >
                {project.images.map((image, index) => (
                    <div
                        className="pictures-carousel__img-container"
                        key={index}
                        onClick={() => window.open("/img/" + image, "_blank")}
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
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
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
            >
                <div className="pictures-carousel__btn-container">
                    <FaAngleRight className="active" />
                    <FaAngleRight />
                </div>
            </span>
        </div>
    );
};

export default CarouselPictures;
