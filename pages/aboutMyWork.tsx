import Head from "next/head";
import SectionFormation from "../components/pageAboutWork/SectionFormation";
import SectionHardSkills from "../components/pageAboutWork/SectionHardSkills";
import SectionProjects from "../components/pageAboutWork/projects/SectionProjects";
import SectionTools from "../components/pageAboutWork/SectionTools";
import SectionGames from "../components/pageAboutWork/games/SectionGames";
import { handleScrollToTop } from "../utils/handleScrollToTop";
import { useEffect } from "react";

const aboutMyWork = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        handleScrollToTop();
    }, []);
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
            <SectionTools />
            <div className="background-shape-container">
                <div className="background-shape"></div>
            </div>
            <SectionProjects />
            <SectionGames />
            <SectionHardSkills />
            <SectionFormation />
        </>
    );
};

export default aboutMyWork;
