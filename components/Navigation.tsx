import Link from "next/link";
import React, { MouseEvent, MutableRefObject, useRef } from "react";
import { useMyCursorContext } from "./CursorContext";

const Navigation = () => {
    const navigationRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    const resetButtonBehavior = (
        e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLLIElement>
    ) => {
        const defBar = document.querySelector(".header__default-bar");
        const button = document.querySelector("#toggle-nav-button");
        document.body.classList.remove("opened");
        button?.classList.remove("opened");
        defBar?.classList.remove("opened");
        navigationRef.current.classList.remove("opened");
        const isExpanded = button?.getAttribute("aria-expanded") === "true";
        button?.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
        handleMouseLeave();
    };

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
