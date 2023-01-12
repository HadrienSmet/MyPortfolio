import { MouseEvent, useState } from "react";
import HobbyImage from "../components/HobbyImage";
import hobbiesData from "../utils/hobbiesData";
import { useMousePosition } from "../utils/hooks";

const useSectionHobby = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
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
    };
};

const SectionHobby = () => {
    const { activeIndex, handleActiveIndex, resetActiveIndex } =
        useSectionHobby();
    const { x, y } = useMousePosition();

    return (
        <div className="about-me-page__hobbies-side">
            <h2>Hobbies</h2>
            <div className="about-me-page__list-container">
                <ul>
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
        </div>
    );
};

export default SectionHobby;
