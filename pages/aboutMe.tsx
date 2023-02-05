import Head from "next/head";
import { useEffect } from "react";
import SectionFewWords from "../components/pageAboutMe/fewWords/SectionFewWords";
import SectionHobby from "../components/pageAboutMe/hobbies/SectionHobby";
import SectionSoftSkills from "../components/pageAboutMe/softSkills/SectionSoftSkills";

const useAboutMe = () => {
    useEffect(() => {
        document.body.classList.remove("fixed");
    });
};

const AboutMe = () => {
    useAboutMe();
    return (
        <>
            <Head>
                <title>Hadrien Smet - About my work</title>
                <meta
                    name="description"
                    content="Front-end developer that offers great solutions for your apps and web sites. And creates modern design to highlight your product "
                />
                <meta name="robots" content="index, follow"></meta>
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            <section className="about-me-page">
                <h1>About me</h1>
                <SectionSoftSkills />
                <SectionFewWords />
                <SectionHobby />
            </section>
        </>
    );
};

export default AboutMe;
