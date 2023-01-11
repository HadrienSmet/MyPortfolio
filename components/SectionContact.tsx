import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import handsomeYoungDevelopper from "../assets/images/photo-cv_151222.webp";
import ContactForm from "./ContactForm";
import { useMyCursorContext } from "./CursorContext";

const SectionContact = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    return (
        <section className="contact">
            <h2>Wants to work together?</h2>
            <div className="contact__first-row">
                <div className="contact__media-side">
                    <h3>Get in touch with me via social media or mail</h3>
                    <div className="contact__media-icons-container">
                        <a href="https://github.com/HadrienSmet">
                            <FaGithub
                                id="github"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/hadrien-smet-b80022207/">
                            <FaLinkedin
                                id="linkedin"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>
                        <a href="https://www.facebook.com/hadrien.smet/">
                            <FaFacebook
                                id="facebook"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>
                        <a href="https://twitter.com/hadrien_smet">
                            <FaTwitter
                                id="twitter"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>
                    </div>
                </div>
                <div className="contact__image-container">
                    <Image
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
