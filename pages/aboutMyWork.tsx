import Head from "next/head";
import SectionProjects from "../components/SectionProjects";

const aboutMyWork = () => {
    return (
        <>
            <Head>
                <title>Hadrien Smet - About my work</title>
                <meta
                    name="description"
                    content="Front-end developer that offers great solutions for your apps and web sites. And creates modern design to highlight your product "
                />
            </Head>
            <h1 className="about-work__main-title">About my work</h1>
            <SectionProjects />
        </>
    );
};

export default aboutMyWork;

// export const getStaticProps = async () => {
//     const
// }
