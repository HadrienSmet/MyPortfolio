import React from "react";
import { FaFacebook, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
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
            <em>Hadri</em>
            <div className="footer__links-container">
                <div
                    id="footer-linkedin"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaLinkedin className="active" />
                    <FaLinkedin />
                </div>
                <div
                    id="footer-facebook"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaFacebook className="active" />
                    <FaFacebook />
                </div>
                <div
                    id="footer-mail"
                    className="footer__link-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaRegEnvelope className="active" />
                    <FaRegEnvelope />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
