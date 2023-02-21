export interface ProjectInterface {
    id: string;
    idInNumber: number;
    name: string;
    images: string[];
    legends: string[];
    imageLink: string;
    description: string;
    tools: string[];
    codeLink: string;
    link?: string;
}
export interface GameInterface {
    id: string;
    idInNumber: number;
    name: string;
    image: string;
    imageLink: string;
    description: string;
    tools: string[];
    codeLink: string;
    link?: string;
}
