import React, { MouseEvent } from "react";
import { useMyCursorContext } from "../../../context/CursorContext";

type Props = {
    handleActiveIndex: (event: MouseEvent<HTMLLIElement>) => void;
    resetActiveIndex: () => void;
};

const useHobbiesList = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    return {
        handleMouseEnter,
        handleMouseLeave,
    };
};

const HobbiesList = ({ handleActiveIndex, resetActiveIndex }: Props) => {
    const { handleMouseEnter, handleMouseLeave } = useHobbiesList();
    return (
        <div className="list-container">
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <li
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                    id="hobby-0"
                >
                    Travelling, love to travel alone.
                </li>
                <li
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                    id="hobby-1"
                >
                    Watching series.
                </li>
                <li
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                    id="hobby-2"
                >
                    Watching stand-up
                </li>
                <li
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                    id="hobby-3"
                >
                    Coding
                </li>
                <li
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                    id="hobby-4"
                >
                    Reading old philosophers
                </li>
            </ul>
        </div>
    );
};

export default HobbiesList;
