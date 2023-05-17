import Head from "next/head";
import { useEffect } from "react";
import SectionAbout from "../components/pageIndex/about/SectionAbout";
import SectionContact from "../components/pageIndex/contact/SectionContact";
import SectionIntro from "../components/pageIndex/intro/SectionIntro";

const useIndex = () => {
    useEffect(() => {
        document.querySelector("main")?.classList.add("welcome");
        document.querySelector("footer")?.classList.add("welcome");
        return () => {
            document.querySelector("main")?.classList.remove("welcome");
            document.querySelector("footer")?.classList.remove("welcome");
        };
    }, []);
};

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useIndex();
    return (
        <>
            <Head>
                <title>Hadrien Smet</title>
                <meta
                    name="description"
                    content="Hadrien Smet, fullstack junior developer enthousiast to the idea to tackle new challenges"
                />
                <meta name="robots" content="index, follow"></meta>
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            <SectionIntro />
            <SectionAbout />
            <SectionContact />
        </>
    );
};

export default index;
