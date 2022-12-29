import Image from "next/image";
import handsomeYoungDevelopper from "../assets/images/photo-cv_151222.jpg";
import MuiGradientBorder from "../components/MuiGradientBorder";
import { useMyCursorContext } from "./CursorContext";

const SectionIntro = () => {
    const [, setIsCursorHover] = useMyCursorContext();
    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    return (
        <section className="intro">
            <MuiGradientBorder>
                <div className="intro__content">
                    <div className="intro__details">
                        <h1>
                            <span className="name">Hadrien Smet</span>
                            <br />
                            <span className="js">Front-end developer</span>
                            <br />
                            <strong
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                JavaScript
                            </strong>
                        </h1>
                        <p>
                            I help the companies to find a fine solution to
                            deploy their services online
                        </p>
                    </div>
                    <div
                        className="intro__img-container"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src={handsomeYoungDevelopper}
                            alt="Probablement l'un des meilleurs et l'un des plus beau développeurs. Mais loin d'être prétentieux."
                            width={350}
                            height={420}
                        />
                    </div>
                </div>
            </MuiGradientBorder>
        </section>
    );
};

export default SectionIntro;
