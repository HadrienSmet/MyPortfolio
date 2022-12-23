import { useDispatch } from "react-redux";
import { setCursorState } from "../features/cursorState.slice";

const Header = () => {
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        dispatch(setCursorState(true));
    };
    const handleMouseLeave = () => {
        dispatch(setCursorState(false));
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
