import React from "react";
import { useMyCursorContext } from "../../../context/CursorContext";

const ContactCvContainer = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    return (
        <div className="cv-container">
            <a
                href="https://i.ibb.co/KsCMMqL/CV-Frontend-developer.jpg"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                My CV{" "}
                <em>
                    {"("}en{")"}
                </em>
            </a>
            <a
                href="https://i.ibb.co/j4SLHcp/CV-D-veloppeur-frontend.jpg"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                My CV{" "}
                <em>
                    {"("}fr{")"}
                </em>
            </a>
        </div>
    );
};

export default ContactCvContainer;
