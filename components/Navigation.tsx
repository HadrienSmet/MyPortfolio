import Link from "next/link";
import React, { MouseEvent } from "react";
import { useMyCursorContext } from "./CursorContext";

const Navigation = () => {
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
        const navigation = document.querySelector("nav");
        const defBar = document.querySelector(".header__default-bar");
        const button = document.querySelector("#toggle-nav-button");
        console.log(button);

        document.body.classList.remove("opened");
        button?.classList.remove("opened");
        defBar?.classList.remove("opened");
        navigation?.classList.remove("opened");
        const isExpanded = button?.getAttribute("aria-expanded") === "true";
        console.log(isExpanded);

        button?.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
    };

    return (
        <nav>
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
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Projects
                </li>
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
