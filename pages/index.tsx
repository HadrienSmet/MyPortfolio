import Head from "next/head";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import SectionIntro from "../components/SectionIntro";

const index = () => {
    return (
        <>
            <Head>
                <title>Hadrien Smet</title>
                <meta
                    name="description"
                    content="Welcome on my portfolio. I am a web developer specialized in front-end. I use React, typeScript and Next to build the applications that my clients desires"
                />
            </Head>
            <SectionIntro />
            <SectionAbout />
            <SectionContact />
        </>
    );
};

export default index;
