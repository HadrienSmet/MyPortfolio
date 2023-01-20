import Image from "next/image";

type Props = {
    url: string;
    active: boolean;
    x: number;
    y: number;
};
const HobbyImage = ({ url, active, x, y }: Props) => {
    return (
        <Image
            className={active ? "is-active" : ""}
            src={"/img/" + url}
            alt="Picture of my hobby"
            width={700}
            height={700}
            style={{
                transform: `translate(${x + 20}px, ${y - 150}px) rotate(5deg)`,
            }}
        />
    );
};

export default HobbyImage;
