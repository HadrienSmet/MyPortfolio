import Link from "next/link";
import { MutableRefObject, useRef } from "react";
import { useMyCursorContext } from "../context/CursorContext";

const useNavigation = () => {
    const isBrowser = typeof window !== "undefined";
    let defBar: Element | null;
    let button: Element | null;
    if (isBrowser) defBar = document.querySelector(".header__default-bar");
    if (isBrowser) button = document.querySelector("#toggle-nav-button");
    const navigationRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    const classRemover = () => {
        document.body.classList.remove("fixed");
        document.body.classList.remove("opened");
        if (button) button.classList.remove("opened");
        if (defBar) defBar.classList.remove("opened");
        navigationRef.current.classList.remove("opened");
    };

    const attributeButtonToggler = () => {
        if (button) {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute(
                "aria-expanded",
                !isExpanded ? "true" : "false"
            );
        }
    };
    const resetButtonBehavior = () => {
        attributeButtonToggler();
        classRemover();
        handleMouseLeave();
    };

    return {
        handleMouseEnter,
        handleMouseLeave,
        resetButtonBehavior,
        navigationRef,
    };
};

const Navigation = () => {
    const {
        handleMouseEnter,
        handleMouseLeave,
        resetButtonBehavior,
        navigationRef,
    } = useNavigation();

    return (
        <nav ref={navigationRef}>
            <ul>
                <li
                    onClick={resetButtonBehavior}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/" onClick={resetButtonBehavior}>
                        Home
                    </Link>
                </li>
                <li
                    onClick={resetButtonBehavior}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/aboutMe" onClick={resetButtonBehavior}>
                        About Me
                    </Link>
                </li>
                <li
                    onClick={resetButtonBehavior}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/aboutMyWork" onClick={resetButtonBehavior}>
                        About my work
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
