import Link from "next/link";
import React from "react";
import { useMyCursorContext } from "./CursorContext";

const Navigation = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    return (
        <nav>
            <ul>
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/">Home</Link>
                </li>
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/aboutMe">About Me</Link>
                </li>
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="/aboutMyWork">About my work</Link>
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
