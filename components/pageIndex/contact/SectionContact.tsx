import { FaAngleUp } from "react-icons/fa";
import Image from "next/image";
import handsomeYoungDevelopper from "../../../public/img/photo-cv_151222-bgless.webp";
import ContactForm from "./ContactForm";
import { useEffect, useRef } from "react";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import ContactMediasContainer from "./ContactMediasContainer";
import ContactCvContainer from "./ContactCvContainer";

const useContactOnScroll = () => {
    const containerContactImgRef = useRef<HTMLDivElement | null>(null);
    const contactImgRef = useRef<HTMLImageElement | null>(null);
    const scrollY = useScrollPosition();

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
                            const bottomConvertedForPx =
                                elBottomFromWindow - 730;
                            const valueCheckMin =
                                bottomConvertedForPx < -480
                                    ? -480
                                    : bottomConvertedForPx;
                            const returnValue =
                                valueCheckMin < 0 ? valueCheckMin : 0;
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
    };
};

const SectionContact = () => {
    const { contactImgRef, containerContactImgRef } = useContactOnScroll();

    return (
        <section className="contact" id="contact">
            <div className="slope-container">
                <div className="left-slope"></div>
                <div className="right-slope"></div>
            </div>
            <a href="#about" id="contact-to-about">
                <FaAngleUp />
            </a>
            <h2>Wants to work together?</h2>
            <div className="contact__first-row">
                <div className="contact__media-side">
                    <h3>Get in touch with me via social media or mail</h3>
                    <ContactMediasContainer />
                    <ContactCvContainer />
                </div>
                <div
                    className="contact__image-container"
                    ref={containerContactImgRef}
                >
                    <Image
                        ref={contactImgRef}
                        src={handsomeYoungDevelopper}
                        alt="Picture of myself."
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
