import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useMyCursorContext } from "./CursorContext";
import { useMousePosition } from "../utils/hooks";

const useDynamicWorkOnMouseMove = () => {
    const workLinkRef = useRef<HTMLDivElement | null>(null);
    const { x } = useMousePosition();
    const [, setIsCursorHover] = useMyCursorContext();

    const isBrowser = typeof window !== "undefined";
    const windowWidth = isBrowser ? window.innerWidth : 0;
    const ratioX = (x / windowWidth) * 100;

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    const handleWorkLinkOpacity = (ratio: number) => {
        if (workLinkRef.current !== null) {
            if (ratio < 50) {
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
            }
        }
    };

    const handleWorkLinkTranslateX = (ratio: number) => {
        if (workLinkRef.current !== null) {
            if (ratio <= 25) {
                workLinkRef.current.style.setProperty(
                    "--work-translateX",
                    "-25px"
                );
            } else {
                workLinkRef.current.style.setProperty(
                    "--work-translateX",
                    `${ratio - 50}px`
                );
            }
        }
    };

    useEffect(() => {
        handleWorkLinkOpacity(ratioX);
        handleWorkLinkTranslateX(ratioX);
    }, [ratioX]);

    return {
        workLinkRef,
        handleMouseEnter,
        handleMouseLeave,
    };
};

const useBubbleOnMouseMove = () => {
    const firstWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const scdWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const thrdWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const fourthWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const fifthWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const sixthWorkBubbleRef = useRef<HTMLDivElement | null>(null);
    const isBrowser = typeof window !== "undefined";
    const windowWidth = isBrowser ? window.innerWidth : 0;
    const { x } = useMousePosition();
    const ratioX = (x / windowWidth) * 100;

    const handleWorkBubblesScale = (ratio: number) => {
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
                        if (ratio < 12.5) {
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
    };

    useEffect(() => {
        handleWorkBubblesScale(ratioX);
    }, [ratioX]);

    return {
        firstWorkBubbleRef,
        scdWorkBubbleRef,
        thrdWorkBubbleRef,
        fourthWorkBubbleRef,
        fifthWorkBubbleRef,
        sixthWorkBubbleRef,
    };
};

const useDetailsOnMouseMove = () => {
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const toolsRef = useRef<HTMLDivElement | null>(null);
    const hardSkillsRef = useRef<HTMLDivElement | null>(null);
    const formationRef = useRef<HTMLDivElement | null>(null);
    const isBrowser = typeof window !== "undefined";
    const windowWidth = isBrowser ? window.innerWidth : 0;
    const { x } = useMousePosition();
    const ratioX = (x / windowWidth) * 100;

    const handleWorkDetailsTranslateY = (ratio: number) => {
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
    };

    useEffect(() => {
        handleWorkDetailsTranslateY(ratioX);
    }, [ratioX]);

    return {
        projectsRef,
        toolsRef,
        hardSkillsRef,
        formationRef,
    };
};

const DynamicLinkWork = () => {
    const { workLinkRef, handleMouseEnter, handleMouseLeave } =
        useDynamicWorkOnMouseMove();
    const {
        firstWorkBubbleRef,
        scdWorkBubbleRef,
        thrdWorkBubbleRef,
        fourthWorkBubbleRef,
        fifthWorkBubbleRef,
        sixthWorkBubbleRef,
    } = useBubbleOnMouseMove();
    const { projectsRef, toolsRef, hardSkillsRef, formationRef } =
        useDetailsOnMouseMove();

    return (
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
    );
};

export default DynamicLinkWork;
