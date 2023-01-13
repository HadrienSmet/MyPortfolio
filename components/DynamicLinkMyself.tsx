import { useEffect, useRef } from "react";
import Link from "next/link";
import { useMyCursorContext } from "./CursorContext";
import { useMousePosition } from "../utils/hooks";

const useLinkOnMouseMove = () => {
    const myLinkRef = useRef<HTMLDivElement | null>(null);
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
    const handleMyLinkOpacity = (ratio: number) => {
        if (myLinkRef.current !== null) {
            if (ratio < 50) {
                myLinkRef.current.style.setProperty("--my-opacity", "0");
            } else if (ratio > 75) {
                myLinkRef.current.style.setProperty("--my-opacity", "1");
            } else {
                myLinkRef.current.style.setProperty(
                    "--my-opacity",
                    `${((ratio - 50) * 4) / 100}`
                );
            }
        }
    };
    const handleMyLinkTranslateX = (ratio: number) => {
        if (myLinkRef.current !== null) {
            if (ratio >= 75) {
                myLinkRef.current.style.setProperty("--my-transleX", "25px");
            } else {
                myLinkRef.current.style.setProperty(
                    "--my-translateX",
                    `${ratio - 50}px`
                );
            }
        }
    };
    useEffect(() => {
        handleMyLinkOpacity(ratioX);
        handleMyLinkTranslateX(ratioX);
    }, [ratioX]);
    return {
        myLinkRef,
        handleMouseEnter,
        handleMouseLeave,
    };
};

const useBubbleOnMouseMove = () => {
    const firstMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const scdMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const thrdMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const fourthMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const fifthMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const sixthMyBubbleRef = useRef<HTMLDivElement | null>(null);
    const isBrowser = typeof window !== "undefined";
    const windowWidth = isBrowser ? window.innerWidth : 0;
    const { x } = useMousePosition();
    const ratioX = (x / windowWidth) * 100;

    const handleMyBubblesScale = (ratio: number) => {
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
                                `${((ratio - 87.5) * 8) / 100}`
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

    useEffect(() => {
        handleMyBubblesScale(ratioX);
    }, [ratioX]);
    return {
        firstMyBubbleRef,
        scdMyBubbleRef,
        thrdMyBubbleRef,
        fourthMyBubbleRef,
        fifthMyBubbleRef,
        sixthMyBubbleRef,
    };
};

const useDetailsOnMouseMove = () => {
    const hobbiesRef = useRef<HTMLDivElement | null>(null);
    const softSkillsRef = useRef<HTMLDivElement | null>(null);
    const picturesRef = useRef<HTMLDivElement | null>(null);
    const isBrowser = typeof window !== "undefined";
    const windowWidth = isBrowser ? window.innerWidth : 0;
    const { x } = useMousePosition();
    const ratioX = (x / windowWidth) * 100;

    const handleMyDetailsTranslateY = (ratio: number) => {
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

    useEffect(() => {
        handleMyDetailsTranslateY(ratioX);
    }, [ratioX]);
    return {
        hobbiesRef,
        softSkillsRef,
        picturesRef,
    };
};

const DynamicLinkMyself = () => {
    const { myLinkRef, handleMouseEnter, handleMouseLeave } =
        useLinkOnMouseMove();
    const {
        firstMyBubbleRef,
        scdMyBubbleRef,
        thrdMyBubbleRef,
        fourthMyBubbleRef,
        fifthMyBubbleRef,
        sixthMyBubbleRef,
    } = useBubbleOnMouseMove();
    const { hobbiesRef, softSkillsRef, picturesRef } = useDetailsOnMouseMove();

    return (
        <div ref={myLinkRef} id="me" className="about__dynamic-links__to-me">
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
    );
};

export default DynamicLinkMyself;
