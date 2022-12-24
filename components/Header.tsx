import { useMyCursorContext } from "./CursorContext";

const Header = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    return (
        <header>
            <em>Hadri</em>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="navigation-toggle-button"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
