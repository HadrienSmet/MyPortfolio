import { TextField } from "@mui/material";
import React from "react";
import { useMyCursorContext } from "./CursorContext";

const ContactForm = () => {
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };
    return (
        <form>
            <div className="contact-form__left-column">
                <TextField
                    label="Email adress"
                    variant="outlined"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <TextField
                    label="Object of email"
                    variant="outlined"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
            <TextField
                className="contact-form__right-column"
                label="Message"
                variant="outlined"
                multiline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </form>
    );
};

export default ContactForm;
