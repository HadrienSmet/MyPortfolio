import { MouseEvent, MutableRefObject, useRef } from "react";
import { useMyCursorContext } from "./CursorContext";

const Header = () => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    const handleButtonBehavior = (e: MouseEvent<HTMLButtonElement>) => {
        const navigation = document.querySelector("nav");
        const target = e.target as Element;
        target.classList.toggle("opened");
        ref.current.classList.toggle("opened");
        navigation?.classList.toggle("opened");
        const isExpanded = target.getAttribute("aria-expanded") === "true";
        target.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
    };

    return (
        <header className="header">
            <div ref={ref} className="header__default-bar">
                <em>Hadri</em>
                <button
                    className="menu"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleButtonBehavior}
                    aria-label="Main Menu"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path
                            className="line line1"
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path
                            className="line line3"
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
