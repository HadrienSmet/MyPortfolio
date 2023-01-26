import React from "react";
import {
    FaAngleUp,
    FaFacebook,
    FaLinkedin,
    FaRegEnvelope,
} from "react-icons/fa";
import { handleScrollToTop } from "../utils/handleScrollToTop";
import { useMyCursorContext } from "../context/CursorContext";

const Footer = () => {
    const [, setIsCursorHover] = useMyCursorContext();
    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    return (
        <footer className="footer">
            <FaAngleUp onClick={handleScrollToTop} />
            <em>Hadri</em>
            <div className="footer__links-container">
                <a
                    href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                    id="footer-linkedin"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaLinkedin
                        className="active"
                        aria-label="Link to my linkedIn"
                    />
                    <FaLinkedin aria-label="Link to my linkedIn" />
                </a>
                <a
                    href="https://www.facebook.com/hadrien.smet/"
                    id="footer-facebook"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaFacebook
                        className="active"
                        aria-label="Link to my facebook"
                    />
                    <FaFacebook aria-label="Link to my facebook" />
                </a>
                <a
                    href="mailto:hadriensmet96@gmail.com"
                    id="footer-mail"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaRegEnvelope
                        className="active"
                        aria-label="Send me a mail from you mailbox"
                    />
                    <FaRegEnvelope aria-label="Send me a mail from you mailbox" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
