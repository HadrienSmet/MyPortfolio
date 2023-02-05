import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useMyCursorContext } from "../../../context/CursorContext";

const useContactMediasContainer = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    return {
        handleMouseEnter,
        handleMouseLeave,
    };
};

const ContactMediasContainer = () => {
    const { handleMouseEnter, handleMouseLeave } = useContactMediasContainer();

    return (
        <div className="media-icons-container">
            <a
                href="https://github.com/HadrienSmet"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="link-circle"></span>
                <FaGithub aria-label="Link to my github" />
            </a>
            <a
                href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="link-circle"></span>
                <FaLinkedin aria-label="Link to my linkedIn" />
            </a>
            <a
                href="https://www.facebook.com/hadrien.smet/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="link-circle"></span>
                <FaFacebook aria-label="Link to my facebook" />
            </a>
            <a
                href="https://twitter.com/hadrien_smet"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="link-circle"></span>
                <FaTwitter aria-label="Link to my twitter" />
            </a>
        </div>
    );
};

export default ContactMediasContainer;
