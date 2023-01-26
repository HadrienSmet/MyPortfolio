import Head from "next/head";
import SectionFormation from "../components/pageAboutWork/SectionFormation";
import SectionHardSkills from "../components/pageAboutWork/SectionHardSkills";
import SectionProjects from "../components/pageAboutWork/projects/SectionProjects";
import { useEffect } from "react";

const useAboutMyWork = () => {
    useEffect(() => {
        document.body.classList.remove("fixed");
    });
};

const aboutMyWork = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAboutMyWork();
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
            <h1 className="about-work__main-title">About my work</h1>
            <SectionProjects />
            <SectionHardSkills />
            <SectionFormation />
        </>
    );
};

export default aboutMyWork;
