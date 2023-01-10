import { useEffect, useRef } from "react";
import Image from "next/image";
import pictureAboutWork from "../public/img/graphic-picture.webp";
import pictureAboutMe from "../assets/images/photo-cv_151222.webp";

const DoubleImageContainer = () => {
    const doubleImgRef = useRef<HTMLDivElement | null>(null);
    const firstImgContainerRef = useRef<HTMLDivElement | null>(null);
    const secondImgContainerRef = useRef<HTMLDivElement | null>(null);

    const handleDoubleImageTranslateX = (ratio: number) => {
        if (doubleImgRef.current !== null) {
            let translateInPx = 200 - 4 * ratio;

            doubleImgRef.current.style.setProperty(
                "--div-translation",
                `${translateInPx}px`
            );
        }
    };

    const handleContainersWidth = (ratio: number) => {
        if (
            firstImgContainerRef.current !== null &&
            secondImgContainerRef.current !== null
        ) {
            if (ratio <= 25) {
                firstImgContainerRef.current.style.setProperty(
                    "--first-div-width",
                    `100%`
                );
                secondImgContainerRef.current.style.setProperty(
                    "--second-div-width",
                    `0%`
                );
            } else if (ratio >= 75) {
                firstImgContainerRef.current.style.setProperty(
                    "--first-div-width",
                    `0%`
                );
                secondImgContainerRef.current.style.setProperty(
                    "--second-div-width",
                    `100%`
                );
            } else {
                firstImgContainerRef.current.style.setProperty(
                    "--first-div-width",
                    `${100 - (ratio - 25) * 2}%`
                );
                secondImgContainerRef.current.style.setProperty(
                    "--second-div-width",
                    `${(ratio - 25) * 2}%`
                );
            }
        }
    };

    useEffect(() => {
        const windowWidth = window.innerWidth;
        const isBrowser = typeof window !== "undefined";
        const doubleImgEl =
            isBrowser && (document.getElementById("double-image") as Element);
        const options = {
            root: null,
            threshold: 0,
            rootMargin: "-150px",
        };
        // console.log(window.innerHeight);

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);

        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const ratioX = (e.clientX / windowWidth) * 100;
            handleContainersWidth(ratioX);
            handleDoubleImageTranslateX(ratioX);
        };
        window.addEventListener("mousemove", handlePictureOnMouseMove);
        if (doubleImgEl !== false) observer.observe(doubleImgEl);
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
        };
    }, []);

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
