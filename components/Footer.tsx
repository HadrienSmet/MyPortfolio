import React from "react";
import {
    FaAngleUp,
    FaFacebook,
    FaLinkedin,
    FaRegEnvelope,
} from "react-icons/fa";
import { handleScrollToTop } from "../utils/hooks";
import { useMyCursorContext } from "./CursorContext";

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
                    <FaLinkedin className="active" />
                    <FaLinkedin />
                </a>
                <a
                    href="https://www.facebook.com/hadrien.smet/"
                    id="footer-facebook"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaFacebook className="active" />
                    <FaFacebook />
                </a>
                <a
                    href="mailto:hadriensmet96@gmail.com"
                    id="footer-mail"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaRegEnvelope className="active" />
                    <FaRegEnvelope />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
