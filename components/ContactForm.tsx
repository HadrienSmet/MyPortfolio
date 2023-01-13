import { useForm, ValidationError } from "@formspree/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useMyCursorContext } from "./CursorContext";
import MuiGradientBorder from "./MuiGradientBorder";

const useContactForm = () => {
    const [mailValue, setMailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const mailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const [, setIsCursorHover] = useMyCursorContext();

    const handleMouseEnter = () => {
        setIsCursorHover(true);
    };
    const handleMouseLeave = () => {
        setIsCursorHover(false);
    };

    const handleMailValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMailValue(() => e.target.value);
    };

    const handleMessageValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageValue(() => e.target.value);
    };

    useEffect(() => {
        const handleMailSpanClass = () => {
            if (mailValue !== "") {
                mailRef.current?.classList.add("filled");
            } else {
                mailRef.current?.classList.remove("filled");
            }
        };
        const handleMessageSpanClass = () => {
            if (messageValue !== "") {
                messageRef.current?.classList.add("filled");
            } else {
                messageRef.current?.classList.remove("filled");
            }
        };
        handleMailSpanClass();
        handleMessageSpanClass();
    }, [mailValue, messageValue]);

    return {
        mailRef,
        messageRef,
        handleMailValue,
        handleMessageValue,
        handleMouseEnter,
        handleMouseLeave,
    };
};

const ContactForm = () => {
    const {
        mailRef,
        messageRef,
        handleMailValue,
        handleMessageValue,
        handleMouseEnter,
        handleMouseLeave,
    } = useContactForm();
    const [state, handleSubmit] = useForm("moqzqzej");

    if (state.succeeded) {
        return (
            <p>Thank you for your message. I will answer it as soon as I can</p>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact-form__left-column">
                <div
                    className="contact-form__input-mail"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <input
                        ref={mailRef}
                        type="email"
                        name="email"
                        id="mail"
                        onBlur={handleMailValue}
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <span>Email adress</span>
                </div>
            </div>
            <div
                className="contact-form__right-column"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <textarea
                    ref={messageRef}
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    required
                    defaultValue=""
                    onBlur={handleMessageValue}
                ></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <span>Message</span>
            </div>
            <div className="contact-form__button-container">
                <MuiGradientBorder>
                    <button type="submit" disabled={state.submitting}>
                        Send mail
                    </button>
                </MuiGradientBorder>
            </div>
        </form>
    );
};

export default ContactForm;
