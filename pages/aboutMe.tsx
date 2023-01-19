import Head from "next/head";
import SectionHobby from "../components/SectionHobby";
import SectionSoftSkills from "../components/SectionSoftSkills";

const AboutMe = () => {
    return (
        <>
            <Head>
                <title>Hadrien Smet - About my work</title>
                <meta
                    name="description"
                    content="Front-end developer that offers great solutions for your apps and web sites. And creates modern design to highlight your product "
                />
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            <section className="about-me-page">
                <h1>About me</h1>
                <SectionSoftSkills />
                <div className="about-me-page__few-words-side">
                    <h2>Few words</h2>
                    <p>
                        <em>
                            &quot;I am a passionate and enthusiastic front-end
                            developer, recently graduated from a web development
                            program. I love traveling and discovering new
                            cultures, and I hope to have the opportunity to live
                            and work abroad one day. In addition to web
                            development, I enjoy watching movies and TV shows,
                            reading books, and exploring philosophy. I am a
                            positive, optimistic, and dynamic person, always
                            ready to tackle new challenges and learn new things.
                            I am excited to use my skills and enthusiasm to
                            serve a company and work on exciting projects.&quot;
                        </em>
                    </p>
                </div>
                <SectionHobby />
            </section>
        </>
    );
};

export default AboutMe;
