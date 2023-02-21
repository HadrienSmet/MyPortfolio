import React from "react";
import { games } from "../../../data/gamesData";
import GameCard from "./GameCard";

const SectionGames = () => {
    return (
        <section className="about-work games-side">
            <h2>The games I cloned</h2>
            <div className="games-container">
                {games
                    .sort((a, b) => b.idInNumber - a.idInNumber)
                    .map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
            </div>
        </section>
    );
};

export default SectionGames;
