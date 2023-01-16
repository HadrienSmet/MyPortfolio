import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import handsomeYoungDevelopper from "../assets/images/photo-cv_151222.webp";
import ContactForm from "./ContactForm";
import { useMyCursorContext } from "./CursorContext";
import { useEffect, useRef } from "react";
import { useScrollPosition } from "../utils/hooks";

const useContactOnScroll = () => {
    const containerContactImgRef = useRef<HTMLDivElement | null>(null);
    const contactImgRef = useRef<HTMLImageElement | null>(null);
    const scrollY = useScrollPosition();
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        const containerContactImgRect =
            containerContactImgRef.current?.getBoundingClientRect();
        const containerContactImgEl = isBrowser && containerContactImgRef;

        const options = {
            root: null,
            threshold: 1,
            rootMargin: "0px",
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (containerContactImgRect !== undefined)
                        if (containerContactImgRect.bottom > 180) {
                            const elBottomFromWindow =
                                window.innerHeight -
                                containerContactImgRect.top;
                            console.log(elBottomFromWindow);
                            const bottomConvertedForPx =
                                elBottomFromWindow - 730;
                            const valueCheckMin =
                                bottomConvertedForPx < -480
                                    ? -480
                                    : bottomConvertedForPx;
                            const returnValue =
                                valueCheckMin < 0 ? valueCheckMin : 0;
                            console.log(returnValue);
                            if (contactImgRef.current) {
                                contactImgRef.current.style.setProperty(
                                    "--contact-img-translate-y",
                                    `${returnValue / 2}px`
                                );
                            }
                        }
                }
            });
        }, options);
        if (containerContactImgEl !== false) {
            if (containerContactImgEl.current !== null)
                observer.observe(containerContactImgEl.current);
        }
    }, [scrollY]);

    return {
        contactImgRef,
        containerContactImgRef,
        handleMouseEnter,
        handleMouseLeave,
    };
};

const SectionContact = () => {
    const {
        contactImgRef,
        containerContactImgRef,
        handleMouseEnter,
        handleMouseLeave,
    } = useContactOnScroll();

    return (
        <section className="contact">
            <h2>Wants to work together?</h2>
            <div className="contact__first-row">
                <div className="contact__media-side">
                    <h3>Get in touch with me via social media or mail</h3>
                    <div className="contact__media-icons-container">
                        <a
                            href="https://github.com/HadrienSmet"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <FaGithub id="github" />
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <FaLinkedin id="linkedin" />
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/hadrien.smet/"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <FaFacebook id="facebook" />
                            <FaFacebook />
                        </a>
                        <a
                            href="https://twitter.com/hadrien_smet"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <FaTwitter id="twitter" />
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div
                    className="contact__image-container"
                    ref={containerContactImgRef}
                >
                    <Image
                        ref={contactImgRef}
                        src={handsomeYoungDevelopper}
                        alt="Probablement l'un des meilleurs et l'un des plus beaux développeurs. Mais loin d'être prétentieux."
                        width={350}
                        height={420}
                    />
                </div>
            </div>
            <ContactForm />
        </section>
    );
};

export default SectionContact;
