import { ProjectInterface } from "./interfaces/models";
export const projects: ProjectInterface[] = [
    {
        id: 1,
        name: "Booki - First project for OpenClassrooms",
        imageUrl: "./assets/images/Margot-Robbie.webp",
        description:
            "The goal of this project was to teach us how to integrate a basic template only using HTML and CSS. So we learned how to improve our workflow and wich details required most attention",
        tools: ["HTML", "CSS"],
        codeLink: "https://github.com/HadrienSmet/OpenClassroom-P2",
    },
    {
        id: 2,
        name: "OhMyFood - Second project for OpenClassrooms",
        imageUrl: "./assets/images/Margot-Robbie.webp",
        description:
            "The goal of this project was to teach us how to integrate a template and to handle basic animations only using HTML and Sass . So we learned how to handle pseudo-classes, pseudo-elements and pseudo-selectors",
        tools: ["HTML", "Sass"],
        codeLink: "https://github.com/HadrienSmet/OpenClassroom-P3",
    },
    {
        id: 3,
        name: "LaPanthere - Third project for OpenClassrooms",
        imageUrl: "./assets/images/Margot-Robbie.webp",
        description:
            "The goal of this project was to teach us how to improve the SEO and the accessibility of an already existing website. So we learned how to fix bad practices and wich good practices we had to implement in order to be appreciated by the search engines. We also learned wich details were important during a website creation if you want that your services can be reach by a lot of users",
        tools: ["HTML", "CSS"],
        codeLink: "https://github.com/HadrienSmet/lapanthere",
    },
    {
        id: 4,
        name: "PIIIQUANTE - Fifth project for OpenClassrooms",
        imageUrl: "./assets/images/Margot-Robbie.webp",
        description:
            "The goal of this project was to teach us how to create a REST with NodeJS. The front-end was already set we just had to create the routes, the middlewares and the controllers.",
        tools: ["NodeJS", "multer"],
        codeLink: "https://github.com/HadrienSmet/Projet6",
    },
    {
        id: 5,
        name: "Groupomania - Sixth project for OpenClassrooms",
        imageUrl: "./assets/images/Margot-Robbie.webp",
        description:
            "For this project we had to build a really basic social network from scratch and we had to use a framework between Angular, React and Vue. I chose React.",
        tools: [
            "Sass",
            "JavaScript",
            "NodeJS",
            "React",
            "Redux",
            "Multer",
            "Mongoose",
        ],
        codeLink: "https://github.com/HadrienSmet/Projet-Groupomania",
    },
    {
        id: 6,
        name: "Travel App - First project on my own",
        imageUrl: "./assets/images/Margot-Robbie.webp",
        description:
            "When I started developping this website I was dreaming about a tool that would help and fit to any kind of travellers. I wanted to create a place were we could meet and talk to people, share pictures from your trip and precise where you took it on a map, book hostels and plane tickets and save all those data in the same place in the user's phone, share your trip and all kinds of tips like that an algo that could have offer great trip to the futur users based on the data provided by the users and even warns you to hard to cross borders and provides you all the links to your ambassy to get you visa. Well I was young. Now that I am 2 months older I can clearly see that I mostly have to learn how to be a better developper if I want to build this huge app",
        tools: [
            "Sass",
            "JavaScript",
            "NodeJS",
            "React",
            "ThreeJS",
            "Redux",
            "Multer",
            "Mongoose",
        ],
        codeLink: "https://github.com/HadrienSmet/travel-app",
    },
];
