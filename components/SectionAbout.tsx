import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import pictureAboutWork from "../assets/images/bestActor.jpg";
import pictureAboutMe from "../assets/images/Margot-Robbie.jpg";
import { useMyCursorContext } from "./CursorContext";

const SectionAbout = () => {
    const doubleImgRef = useRef<HTMLDivElement | null>(null);
    const firstImgContainerRef = useRef<HTMLDivElement | null>(null);
    const secondImgContainerRef = useRef<HTMLDivElement | null>(null);
    const workLinkRef = useRef<HTMLDivElement | null>(null);
    const myLinkRef = useRef<HTMLDivElement | null>(null);
    const firstWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const scdWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const thrdWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    const handleDoubleImageTranslateX = (ratio: number) => {
        if (doubleImgRef.current !== null) {
            let translateInPx = 100 - 2 * ratio;
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

    const handleLinksOpacity = (ratio: number) => {
        if (myLinkRef.current !== null && workLinkRef.current !== null) {
            if (ratio < 50) {
                myLinkRef.current.style.setProperty("--my-opacity", "0");
                if (ratio < 25) {
                    workLinkRef.current.style.setProperty(
                        "--work-opacity",
                        "1"
                    );
                } else {
                    workLinkRef.current.style.setProperty(
                        "--work-opacity",
                        `${(100 - (ratio - 50) * 4) / 100 - 1}`
                    );
                }
            } else if (ratio >= 50) {
                workLinkRef.current.style.setProperty("--work-opacity", "0");
                if (ratio > 75) {
                    myLinkRef.current.style.setProperty("--my-opacity", "1");
                } else {
                    myLinkRef.current.style.setProperty(
                        "--my-opacity",
                        `${((ratio - 50) * 4) / 100}`
                    );
                }
            }
        }
    };

    const handleLinksTranslateX = (ratio: number) => {
        if (myLinkRef.current !== null && workLinkRef.current !== null) {
            if (ratio <= 25) {
                workLinkRef.current.style.setProperty(
                    "--work-translateX",
                    "-25px"
                );
            } else if (ratio >= 75) {
                myLinkRef.current.style.setProperty("--my-transleX", "25px");
            } else {
                myLinkRef.current.style.setProperty(
                    "--my-translateX",
                    `${ratio - 50}px`
                );
                workLinkRef.current.style.setProperty(
                    "--work-translateX",
                    `${ratio - 50}px`
                );
            }
        }
    };

    const handleBubblesScale = (ratio: number) => {
        if (
            firstWorkBubbleRef.current !== null &&
            scdWorkBubbleRef.current !== null &&
            thrdWorkBubbleRef.current !== null
        ) {
            if (ratio < 50) {
                firstWorkBubbleRef.current.style.setProperty(
                    "--work-bubble-scale",
                    `${(100 - ratio * 2) / 100}`
                );
            }
            if (ratio < 25) {
                thrdWorkBubbleRef.current.style.setProperty(
                    "--work-bubble-scale",
                    `${(100 - ratio * 4) / 100}`
                );
            }
            if (ratio < 20) {
                scdWorkBubbleRef.current.style.setProperty(
                    "--work-bubble-scale",
                    `${(100 - ratio * 5) / 100}`
                );
            }
        }
    };

    useEffect(() => {
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const windowWidth = window.innerWidth;
            const ratioX = (e.clientX / windowWidth) * 100;
            handleLinksOpacity(ratioX);
            handleLinksTranslateX(ratioX);
            handleContainersWidth(ratioX);
            handleDoubleImageTranslateX(ratioX);
            handleBubblesScale(ratioX);
        };

        window.addEventListener("mousemove", handlePictureOnMouseMove);
        return () =>
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
    }, []);

    return (
        <section className="about">
            <div className="about__dynamic-links-container">
                <div
                    ref={workLinkRef}
                    id="work"
                    className="about__dynamic-links__too-work"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span
                        ref={firstWorkBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={scdWorkBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={thrdWorkBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <Link href="/aboutMyWork">
                        More about <em>My work</em>
                    </Link>
                </div>
                <div
                    ref={myLinkRef}
                    id="me"
                    className="about__dynamic-links__too-me"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/aboutMe">
                        More about <em>Me</em>
                    </Link>
                </div>
            </div>
            <div ref={doubleImgRef} className="about__double-img-container">
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
        </section>
    );
};

export default SectionAbout;
