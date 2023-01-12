import { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import pictureAboutWork from "../public/img/graphic-picture.webp";
import pictureAboutMe from "../public/img/photo-cv_151222-bgless.webp";

const handleDoubleImageTranslateX = (
    ratio: number,
    element: MutableRefObject<HTMLDivElement | null>
) => {
    if (element.current !== null) {
        let translateInPx = 100 - 2 * ratio;
        element.current.style.setProperty(
            "--div-translation",
            `${translateInPx}px`
        );
    }
};

const handleContainersWidth = (
    ratio: number,
    firstRef: MutableRefObject<HTMLDivElement | null>,
    secondRef: MutableRefObject<HTMLDivElement | null>
) => {
    if (firstRef.current !== null && secondRef.current !== null) {
        if (ratio <= 25) {
            firstRef.current.style.setProperty("--first-div-width", `100%`);
            secondRef.current.style.setProperty("--second-div-width", `0%`);
        } else if (ratio >= 75) {
            firstRef.current.style.setProperty("--first-div-width", `0%`);
            secondRef.current.style.setProperty("--second-div-width", `100%`);
        } else {
            firstRef.current.style.setProperty(
                "--first-div-width",
                `${100 - (ratio - 25) * 2}%`
            );
            secondRef.current.style.setProperty(
                "--second-div-width",
                `${(ratio - 25) * 2}%`
            );
        }
    }
};

const useImageMouseMove = () => {
    const doubleImgRef = useRef<HTMLDivElement | null>(null);
    const firstImgContainerRef = useRef<HTMLDivElement | null>(null);
    const secondImgContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const windowWidth = window.innerWidth;
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const ratioX = (e.clientX / windowWidth) * 100;
            handleContainersWidth(
                ratioX,
                firstImgContainerRef,
                secondImgContainerRef
            );
            handleDoubleImageTranslateX(ratioX, doubleImgRef);
        };
        window.addEventListener("mousemove", handlePictureOnMouseMove);
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
        };
    }, []);
    return {
        doubleImgRef,
        firstImgContainerRef,
        secondImgContainerRef,
    };
};

const useImageOnScroll = () => {
    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        const doubleImgEl =
            isBrowser && (document.getElementById("double-image") as Element);

        const options = {
            root: null,
            threshold: 0.7,
            rootMargin: "0px",
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // handleDisableScroll();
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);
        if (doubleImgEl !== false) observer.observe(doubleImgEl);
    }, []);
};

const DoubleImageContainer = () => {
    const { doubleImgRef, firstImgContainerRef, secondImgContainerRef } =
        useImageMouseMove();
    useImageOnScroll();
    return (
        <div
            id="double-image"
            ref={doubleImgRef}
            className="about__double-img-container"
        >
            <div
                ref={firstImgContainerRef}
                className="about__first-img-container"
            >
                <Image
                    src={pictureAboutWork}
                    alt="Illustration de moi-même"
                    width={550}
                    height={420}
                />
            </div>
            <div
                ref={secondImgContainerRef}
                className="about__second-img-container"
            >
                <Image
                    src={pictureAboutMe}
                    alt="Photos de moi-même"
                    width={550}
                    height={420}
                />
            </div>
        </div>
    );
};

export default DoubleImageContainer;
