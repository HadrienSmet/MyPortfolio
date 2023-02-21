import { GameInterface } from "../interfaces/models";
export const games: GameInterface[] = [
    {
        id: "1",
        idInNumber: 1,
        name: "Snake clone",
        imageLink: "snake-clone-square.webp",
        image: "snake-clone.webp",
        description:
            "I made a basic clone of the snake game. There are no logic about leveling just the basic game. There is a small bug: if you want to turn around and if you press the two keys in order to do it before the animation of the snake. He will actually be able to turn around and kill himself by doing it. ",
        tools: ["typescript", "React"],
        codeLink: "https://github.com/HadrienSmet/snakeGame",
    },
    {
        id: "2",
        idInNumber: 2,
        name: "Pong clone",
        imageLink: "pong-clone-square.webp",
        image: "pong-clone.webp",
        description:
            "I made a clone of the pong game. There are no logic about leveling just the basic game. The color slightly changes his hue every frame of the animation. The angle rebounce of the ball is calculated in function of the position of the collision on the paddle. There is a small bug: if the computer catches the ball with the bottom or top edge of his paddle, the ball will go down or up and the computer will follow the ball and disappear of the window.",
        tools: ["typescript"],
        codeLink: "https://github.com/HadrienSmet/pong-clone",
    },
    {
        id: "3",
        idInNumber: 3,
        name: "Tetris clone",
        imageLink: "tetris-clone-square.webp",
        image: "tetris-clone.webp",
        description:
            "I made a clone of the tetris game. There are no logic about leveling just the basic game. Dont expect too much of this version of tetris There might be a few bugs: If you try to rotate you tetrominoes standing at one of the edge of the array the tetrominoes might be displayed from either side of the array. Same if you rotate just next to some frozen tetrominoes: a weird behavior happens. And the last but also the least bug is that some time when the tetrominoes are moving down some squares keeps their blue color but eventhough they haven't the class 'taken' so it does not disturb the game. And when an other tetromino falls on those weird blue square it goes back to normal",
        tools: ["typescript", "React"],
        codeLink: "https://github.com/HadrienSmet/tetris-clone",
    },
];
