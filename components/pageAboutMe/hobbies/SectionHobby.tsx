import { MouseEvent, useEffect, useState } from "react";
import HobbyImage from "./HobbyImage";
import hobbiesData from "../../../data/hobbiesData";
import { useMousePosition } from "../../../hooks/useMousePosition";
import { useWindowSize } from "../../../hooks/useWindowSize";
import HobbyGallery from "./HobbyGallery";
import HobbiesList from "./HobbiesList";

const useSectionHobby = () => {
    const [screenWidth, setScreenWidth] = useState<number | undefined>(
        undefined
    );
    const [activeIndex, setActiveIndex] = useState(-1);
    const windowSize = useWindowSize();

    const handleActiveIndex = (event: MouseEvent<HTMLLIElement>) => {
        const element = event.target as HTMLElement;
        const elementIndex = element.id.split("-")[1];
        setActiveIndex(() => parseInt(elementIndex));
    };
    const resetActiveIndex = () => {
        setActiveIndex(-1);
    };

    useEffect(() => {
        if (windowSize.width === undefined) {
            setScreenWidth(() => window.innerWidth);
        } else {
            setScreenWidth(() => windowSize.width);
        }
    }, [windowSize.width]);

    return {
        activeIndex,
        screenWidth,
        handleActiveIndex,
        resetActiveIndex,
    };
};

const SectionHobby = () => {
    const { activeIndex, screenWidth, handleActiveIndex, resetActiveIndex } =
        useSectionHobby();
    const { x, y } = useMousePosition();

    return (
        <div className="hobbies-side">
            <h2>Hobbies</h2>
            {screenWidth && screenWidth < 1025 && <HobbyGallery />}
            <HobbiesList
                handleActiveIndex={(e) => handleActiveIndex(e)}
                resetActiveIndex={resetActiveIndex}
            />
            {screenWidth && screenWidth > 1024 && (
                <div className="hobbies-data">
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
