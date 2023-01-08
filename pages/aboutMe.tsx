const aboutMe = () => {
    return (
        <section className="about-me-page">
            <h1>About me</h1>
            <div className="about-me-page__few-words-side">
                <h2>Few words</h2>
                <p>
                    <em>
                        &quot;I am a passionate and enthusiastic front-end
                        developer, recently graduated from a web development
                        program. I love traveling and discovering new cultures,
                        and I hope to have the opportunity to live and work
                        abroad one day. In addition to web development, I enjoy
                        watching movies and TV shows, reading books, and
                        exploring philosophy. I am a positive, optimistic, and
                        dynamic person, always ready to tackle new challenges
                        and learn new things. I am excited to use my skills and
                        enthusiasm to serve a company and work on exciting
                        projects.&quot;
                    </em>
                </p>
            </div>
            <div className="about-me-page__hobbies-side">
                <h2>Hobbies</h2>
                <ul>
                    <li>Travelling, love to travel alone.</li>
                    <li>Watching series.</li>
                    <li>Watching stand-up</li>
                    <li>Coding</li>
                    <li>Reading old philosophers</li>
                </ul>
            </div>
            <div className="about-me-page__soft-skills-side">
                <h2>Soft skills</h2>
                <ul>
                    <li>Problem-solving</li>
                    <li>Critical thinking</li>
                    <li>Adaptability</li>
                    <li>Creativity</li>
                </ul>
            </div>
        </section>
    );
};

export default aboutMe;
