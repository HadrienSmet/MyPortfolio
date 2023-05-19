import Image from "next/image";
import { useEffect, useRef } from "react";
import handsomeYoungDevelopper from "../../../public/img/photo-cv_151222-bgless.webp";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import BackgroundIntro from "./BackgroundIntro";
import { useMyCursorContext } from "../../../context/CursorContext";
import { FaAngleDown } from "react-icons/fa";

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
                        alt="Picture of myself."
                        width={300}
                        height={420}
                        priority
                    />
                </div>
            </div>
            <a href="#about" id="intro-to-about">
                <FaAngleDown
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </a>
        </section>
    );
};

export default SectionIntro;
