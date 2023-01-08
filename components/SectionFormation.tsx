import React from "react";

const SectionFormation = () => {
    return (
        <section className="about-work about-work__formation-skills-section">
            <div className="about-work__formation-side">
                <h2>Formation</h2>
                <p>
                    <em>
                        &quot;I started learning web development during November
                        2021.
                        <br />
                        At first I only took a look at this field because I knew
                        it would allow me to travel and work at the same time,
                        being able to work.
                        <br />
                        But eventually I discovered myself a new passion where
                        creativity and logic were the only limits
                        <br />
                        After 6 months learning programming languages on my own
                        from youtube chanels like FromScratch and openClassrooms
                        free lessons. I decided to quit my job and pursue formal
                        education
                        <br />I chose <strong>OpenClassrooms</strong> because
                        that&apos;s where it all began for me.
                        <br />I received my diploma four months later but I did
                        not start looking for a job right away. I wanted to
                        build a project from scratch and create a portfolio to
                        showcase my work.&quot;
                    </em>
                </p>
            </div>
            <div className="about-work__hard-skills-side">
                <h2>Hard skills</h2>
                <ul>
                    <li id="dom">DOM manipulation</li>
                    <li id="json">JSON</li>
                    <li id="ajax">
                        <span>AJAX</span>
                        <span>AJAX</span>
                    </li>
                    <li id="responsive">Responsive Design</li>
                    <li id="optimization">Web Performance Optimization</li>
                    <li id="seo">SEO / Accessibility</li>
                    <li id="version">Version control</li>
                </ul>
            </div>
        </section>
    );
};

export default SectionFormation;
