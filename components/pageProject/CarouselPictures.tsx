import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { ProjectInterface } from "../../interfaces/models";
import { useMyCursorContext } from "../../context/CursorContext";

type PropsType = {
    project: ProjectInterface;
};

const MUIPicturesCarousel = ({ project }: PropsType) => {
    const [, setIsCursorHover] = useMyCursorContext();
    const handleCursorEnter = () => setIsCursorHover(true);
    const handleCursorLeave = () => setIsCursorHover(false);
    return (
        <Carousel autoPlay={false} swipeable={true} interval={15000}>
            {project.images.map((image, i) => (
                <div
                    className="pictures-carousel__container pictures-carousel__img-container"
                    key={i}
                    onClick={() => window.open("/img/" + image, "_blank")}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                >
                    <Image
                        priority
                        src={"/img/" + image}
                        alt={"Screenshoot du projet " + project.name}
                        width={450}
                        height={450}
                    />
                    <div className="pictures-carousel__legend-container">
                        {project.legends[i]}
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default MUIPicturesCarousel;
