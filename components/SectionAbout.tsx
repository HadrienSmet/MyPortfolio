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
    const firstWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const scdWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const thrdWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const fourthWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const fifthWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const sixthWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const toolsRef = useRef<HTMLDivElement | null>(null);
    const hardSkillsRef = useRef<HTMLDivElement | null>(null);
    const formationRef = useRef<HTMLDivElement | null>(null);
    const myLinkRef = useRef<HTMLDivElement | null>(null);
    const firstMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const scdMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const thrdMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const fourthMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const fifthMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const sixthMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const hobbiesRef = useRef<HTMLDivElement | null>(null);
    const softSkillsRef = useRef<HTMLDivElement | null>(null);
    const picturesRef = useRef<HTMLDivElement | null>(null);
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    const handleDoubleImageTranslateX = (ratio: number) => {
        if (doubleImgRef.current !== null) {
            let translateInPx = 200 - 4 * ratio;
            console.log(translateInPx);

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
            thrdWorkBubbleRef.current !== null &&
            fourthWorkBubbleRef.current !== null &&
            fifthWorkBubbleRef.current !== null &&
            sixthWorkBubbleRef.current !== null
        ) {
            if (ratio < 50) {
                firstWorkBubbleRef.current.style.setProperty(
                    "--work-bubble-scale",
                    `${(100 - ratio * 2) / 100}`
                );
                if (ratio < 25) {
                    thrdWorkBubbleRef.current.style.setProperty(
                        "--work-bubble-scale",
                        `${(100 - ratio * 4) / 100}`
                    );
                    if (ratio < 20) {
                        scdWorkBubbleRef.current.style.setProperty(
                            "--work-bubble-scale",
                            `${(100 - ratio * 5) / 100}`
                        );
                        fourthWorkBubbleRef.current.style.setProperty(
                            "--work-bubble-scale",
                            `${(100 - ratio * 5) / 100}`
                        );
                        if (ratio < 13) {
                            fifthWorkBubbleRef.current.style.setProperty(
                                "--work-bubble-scale",
                                `${(100 - ratio * 8) / 100}`
                            );
                            if (ratio < 10) {
                                sixthWorkBubbleRef.current.style.setProperty(
                                    "--work-bubble-scale",
                                    `${(100 - ratio * 10) / 100}`
                                );
                            }
                        }
                    }
                }
            }
        }
        if (
            firstMyBubbleRef.current !== null &&
            scdMyBubbleRef.current !== null &&
            thrdMyBubbleRef.current !== null &&
            fourthMyBubbleRef.current !== null &&
            fifthMyBubbleRef.current !== null &&
            sixthMyBubbleRef.current !== null
        ) {
            if (ratio > 50) {
                firstMyBubbleRef.current.style.setProperty(
                    "--my-bubble-scale",
                    `${((ratio - 50) * 2) / 100}`
                );
                if (ratio > 75) {
                    thrdMyBubbleRef.current.style.setProperty(
                        "--my-bubble-scale",
                        `${((ratio - 75) * 4) / 100}`
                    );
                    if (ratio > 80) {
                        scdMyBubbleRef.current.style.setProperty(
                            "--my-bubble-scale",
                            `${((ratio - 80) * 5) / 100}`
                        );
                        fourthMyBubbleRef.current.style.setProperty(
                            "--my-bubble-scale",
                            `${((ratio - 80) * 5) / 100}`
                        );
                        if (ratio > 87) {
                            fifthMyBubbleRef.current.style.setProperty(
                                "--my-bubble-scale",
                                `${((ratio - 87) * 8) / 100}`
                            );
                            if (ratio > 90) {
                                sixthMyBubbleRef.current.style.setProperty(
                                    "--my-bubble-scale",
                                    `${((ratio - 90) * 10) / 100}`
                                );
                            }
                        }
                    }
                }
            }
        }
    };

    const handleDetailsTranslateY = (ratio: number) => {
        if (
            projectsRef.current !== null &&
            toolsRef.current !== null &&
            hardSkillsRef.current !== null &&
            formationRef.current !== null
        ) {
            if (ratio < 35) {
                projectsRef.current.classList.add("active");
                if (ratio < 28) {
                    toolsRef.current.classList.add("active");
                    if (ratio < 21) {
                        hardSkillsRef.current.classList.add("active");
                        if (ratio < 14) {
                            formationRef.current.classList.add("active");
                        } else if (ratio > 14) {
                            formationRef.current.classList.remove("active");
                        }
                    } else if (ratio > 21) {
                        hardSkillsRef.current.classList.remove("active");
                    }
                } else if (ratio > 28) {
                    toolsRef.current.classList.remove("active");
                }
            } else if (ratio > 35) {
                projectsRef.current.classList.remove("active");
            }
        }
        if (
            hobbiesRef.current !== null &&
            softSkillsRef.current !== null &&
            picturesRef.current !== null
        ) {
            if (ratio > 65) {
                hobbiesRef.current.classList.add("active");
                if (ratio > 72) {
                    softSkillsRef.current.classList.add("active");
                    if (ratio > 79) {
                        picturesRef.current.classList.add("active");
                    } else if (ratio < 79) {
                        picturesRef.current.classList.remove("active");
                    }
                } else if (ratio < 72) {
                    softSkillsRef.current.classList.remove("active");
                }
            } else if (ratio < 65) {
                hobbiesRef.current.classList.remove("active");
            }
        }
    };

    const handleComponentsAppear = () => {
        if (doubleImgRef.current !== null) {
            const doubleImageRect =
                doubleImgRef.current.getBoundingClientRect();
            const isVisible =
                doubleImageRect.top >= -260 &&
                doubleImageRect.bottom <= window.innerHeight - 10;
            if (isVisible) {
                doubleImgRef.current.classList.add("visible");
                doubleImgRef.current.classList.remove("invisible");
            } else {
                doubleImgRef.current.classList.add("invisible");
                doubleImgRef.current.classList.remove("visible");
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
            handleDetailsTranslateY(ratioX);
        };

        window.addEventListener("mousemove", handlePictureOnMouseMove);
        window.addEventListener("scroll", handleComponentsAppear);
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
            window.removeEventListener("scroll", handleComponentsAppear);
        };
    }, []);

    return (
        <section className="about">
            <div className="about__dynamic-links-container">
                <div
                    ref={workLinkRef}
                    id="work"
                    className="about__dynamic-links__to-work"
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
                    <span
                        ref={fourthWorkBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={fifthWorkBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={sixthWorkBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <Link
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        href="/aboutMyWork"
                    >
                        More about <em>My work</em>
                    </Link>
                    <ul className="about__dynamic-links__to-work__details">
                        <li>
                            <span ref={projectsRef}>Projects</span>
                        </li>
                        <li>
                            <span ref={toolsRef}>Tools</span>
                        </li>
                        <li>
                            <span ref={hardSkillsRef}>Hard skills</span>
                        </li>
                        <li>
                            <span ref={formationRef}>Formations</span>
                        </li>
                    </ul>
                </div>
                <div
                    ref={myLinkRef}
                    id="me"
                    className="about__dynamic-links__to-me"
                >
                    <span
                        ref={firstMyBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={scdMyBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={thrdMyBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={fourthMyBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={fifthMyBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <span
                        ref={sixthMyBubbleRef}
                        className="about__animated-circle"
                    ></span>
                    <Link
                        href="/aboutMe"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        More about <em>Me</em>
                    </Link>
                    <ul className="about__dynamic-links__to-me__details">
                        <li>
                            <span ref={hobbiesRef}>Hobbies</span>
                        </li>
                        <li>
                            <span ref={softSkillsRef}>Soft skills</span>
                        </li>
                        <li>
                            <span ref={picturesRef}>Some Pictures</span>
                        </li>
                    </ul>
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
