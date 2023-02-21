import React, { useEffect } from "react";
import { GameInterface } from "../../interfaces/models";
import { games } from "../../data/gamesData";
import Head from "next/head";
import MuiGradientBorder from "../../components/mui/MuiGradientBorder";
import { useMyCursorContext } from "../../context/CursorContext";
import Image from "next/image";

type Props = {
    game: GameInterface;
};

const useGamePage = () => {
    const [, setIsCursorHover] = useMyCursorContext();
    const handleCursorEnter = () => {
        setIsCursorHover(true);
    };
    const handleCursorLeave = () => {
        setIsCursorHover(false);
    };
    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        const listEl =
            isBrowser && (document.querySelector(".tools-used") as Element);

        const options = {
            root: null,
            threshold: 0.5,
            rootMargin: "0px",
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);
        if (listEl !== false) observer.observe(listEl);
    }, []);

    return {
        handleCursorEnter,
        handleCursorLeave,
    };
};

const GamePage: React.FC<Props> = ({ game }: Props) => {
    const { handleCursorEnter, handleCursorLeave } = useGamePage();
    return (
        <>
            <Head>
                <title>Hadrien Smet - {String(game.name)}</title>
                <meta name="description" content={game.description} />
                <meta name="robots" content="index, follow"></meta>
                <link rel="shortcut icon" href="../favicon.ico" />
            </Head>
            <section className="game-page">
                <h1>{game.name}</h1>
                <Image
                    priority
                    src={"/img/" + game.image}
                    alt={"Screenshoot du projet " + game.name}
                    width={1020}
                    height={500}
                />
                <div className="game-page__content">
                    <p>{game.description}</p>
                    <ul className="tools-used">
                        {game.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                    <div
                        className="game-page__content__btn-container"
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                    >
                        <MuiGradientBorder>
                            <a href={game.codeLink}>Voir le code</a>
                        </MuiGradientBorder>
                        {game.link && <a href={game.link}>Voir le site</a>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GamePage;

export const getStaticPaths = async () => {
    const paths = games.map((game) => `/game/${game.id}`);
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({
    params,
}: {
    params: Record<string, string>;
}) => {
    const game = games.find((p) => p.id === params.id);
    return {
        props: {
            game,
        },
    };
};
