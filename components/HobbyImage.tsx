import Image from "next/image";
import { useMousePosition } from "../utils/hooks";

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
            alt="hobbies data"
            width={50}
            height={70}
            style={{
                transform: `translate(${x - 10}px, ${y - 90}px) rotate(49deg)`,
            }}
            // index={index}
        />
    );
};

export default HobbyImage;
