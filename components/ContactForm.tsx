import { TextField } from "@mui/material";
import React from "react";

const ContactForm = () => {
    return (
        <form>
            <div className="contact-form__left-column">
                <TextField label="Email adress" variant="outlined" />
                <TextField label="Object of email" variant="outlined" />
            </div>
            <TextField label="Message" variant="outlined" multiline />
        </form>
    );
};

export default ContactForm;
