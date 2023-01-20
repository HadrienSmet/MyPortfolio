import { MouseEvent, useState } from "react";
import HobbyImage from "../components/HobbyImage";
import hobbiesData from "../utils/hobbiesData";
import { useMousePosition, useWindowSize } from "../utils/hooks";
import { useMyCursorContext } from "./CursorContext";
import HobbyGallery from "./HobbyGallery";

const useSectionHobby = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    const handleActiveIndex = (event: MouseEvent<HTMLLIElement>) => {
        const element = event.target as HTMLElement;
        const elementIndex = element.id.split("-")[1];
        setActiveIndex(() => parseInt(elementIndex));
    };
    const resetActiveIndex = () => {
        setActiveIndex(-1);
    };
    return {
        activeIndex,
        handleActiveIndex,
        resetActiveIndex,
        handleMouseEnter,
        handleMouseLeave,
    };
};

const SectionHobby = () => {
    const {
        activeIndex,
        handleActiveIndex,
        resetActiveIndex,
        handleMouseEnter,
        handleMouseLeave,
    } = useSectionHobby();
    const { x, y } = useMousePosition();
    const screenWidth = useWindowSize().width;

    return (
        <div className="about-me-page__hobbies-side">
            <h2>Hobbies</h2>
            {screenWidth && screenWidth < 1025 && <HobbyGallery />}
            <div className="about-me-page__list-container">
                <ul
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
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
            {screenWidth && screenWidth > 1024 && (
                <div className="about-me-page__hobbies-data">
                    {hobbiesData.map(({ mediaUrl }, index) => {
                        const isActive = index === activeIndex;
                        const xPos = isActive ? x : 0;
                        const yPos = isActive ? y : 0;
                        return (
                            <HobbyImage
                                key={index}
                                url={mediaUrl}
                                active={isActive}
                                x={xPos}
                                y={yPos}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SectionHobby;
