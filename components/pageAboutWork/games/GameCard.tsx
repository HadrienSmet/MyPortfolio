import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GameInterface } from "../../../interfaces/models";
import { useMyCursorContext } from "../../../context/CursorContext";
import { useWindowSize } from "../../../hooks/useWindowSize";

type Props = {
    game: GameInterface;
};

const useGameCard = ({ game }: Props) => {
    const [screenWidth, setScreenWidth] = useState<number | undefined>(
        undefined
    );
    const [isHover, setIsHover] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const [, setIsCursorHover] = useMyCursorContext();
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width === undefined) {
            setScreenWidth(window.innerWidth);
        } else {
            setScreenWidth(windowSize.width);
        }
    }, [windowSize.width]);

    const handleCursorEnter = () => {
        setIsCursorHover(true);
    };
    const handleCursorLeave = () => {
        setIsCursorHover(false);
    };

    const handleMouseEnter = () => {
        setIsHover(() => true);
    };
    const handleMouseLeave = () => {
        setIsHover(() => false);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rightImageElement = document.querySelector<HTMLImageElement>(
                `#illugame-${game.id}`
            );
            const rect = imgRef.current?.getBoundingClientRect();
            if (rect !== undefined) {
                const index = imgRef.current?.id.split("-")[1];
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ratioX = -(x / rect.width) * 40 + 20;
                const ratioY = -(y / rect.height) * 40 + 20;

                if (rightImageElement !== null) {
                    rightImageElement.style.setProperty(
                        `--img${index}-trans-x`,
                        `${ratioX}px`
                    );
                    rightImageElement.style.setProperty(
                        `--img${index}-trans-y`,
                        `${ratioY}px`
                    );
                }
            }
        };

        if (screenWidth && screenWidth >= 1025) {
            if (isHover) {
                window.addEventListener("mousemove", handleMouseMove);

                return () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                };
            }
        }
    }, [isHover, game.id, screenWidth]);

    return {
        imgRef,
        handleMouseEnter,
        handleMouseLeave,
        handleCursorEnter,
        handleCursorLeave,
    };
};

const GameCard = ({ game }: Props) => {
    const {
        imgRef,
        handleMouseEnter,
        handleMouseLeave,
        handleCursorEnter,
        handleCursorLeave,
    } = useGameCard({
        game,
    });

    return (
        <div
            className="game"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                priority
                src={"/img/" + game.imageLink}
                alt={"illustration du projet:" + game.name}
                width={500}
                height={500}
                ref={imgRef}
                id={`illugame-${game.id}`}
            />
            <div className="game-content">
                <h3>{game.name}</h3>
                <ul>
                    {game.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
                <Link
                    href={"/game/" + game.id}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                >
                    See more
                </Link>
            </div>
        </div>
    );
};

export default GameCard;
