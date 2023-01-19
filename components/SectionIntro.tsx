import Image from "next/image";
import { useEffect, useRef } from "react";
import handsomeYoungDevelopper from "../assets/images/photo-cv_151222.webp";
import MuiGradientBorder from "../components/MuiGradientBorder";
import { useScrollPosition } from "../utils/hooks";
import BackgroundIntro from "./BackgroundIntro";
import { useMyCursorContext } from "./CursorContext";

const useIntroOnScroll = () => {
    const introImgRef = useRef<HTMLImageElement | null>(null);
    const scrollY = useScrollPosition();
    const [, setIsCursorHover] = useMyCursorContext();
    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    useEffect(() => {
        const handleImageTranslateY = () => {
            if (introImgRef.current)
                introImgRef.current.style.setProperty(
                    "--intro-img-translate-y",
                    `calc(-50% + ${scrollY / 2}px)`
                );
        };
        handleImageTranslateY();
    }, [introImgRef, scrollY]);
    return {
        introImgRef,
        handleMouseEnter,
        handleMouseLeave,
    };
};

const SectionIntro = () => {
    const { introImgRef, handleMouseEnter, handleMouseLeave } =
        useIntroOnScroll();

    return (
        <section className="intro" id="intro">
            <BackgroundIntro />
            <MuiGradientBorder>
                <div className="intro__content">
                    <div className="intro__details">
                        <h1>
                            <span className="name">Hadrien Smet</span>
                            <br />
                            <span className="js">Front-end developer</span>
                            <br />
                            <strong>JavaScript</strong>
                        </h1>
                        <p>Elevating digital experiences through code</p>
                    </div>
                    <div
                        className="intro__img-container"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            ref={introImgRef}
                            src={handsomeYoungDevelopper}
                            alt="Probablement l'un des meilleurs et l'un des plus beau développeurs. Mais loin d'être prétentieux."
                            width={350}
                            height={420}
                            priority
                        />
                    </div>
                </div>
            </MuiGradientBorder>
        </section>
    );
};

export default SectionIntro;
