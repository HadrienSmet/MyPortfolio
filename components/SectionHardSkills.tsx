import React from "react";

const SectionHardSkills = () => {
    return (
        <section className="about-work about-work__hard-skills-side">
            <h2>Hard skills</h2>
            <ul>
                <li id="dom">
                    <span>DOM manipulation</span>
                </li>
                <li id="json">
                    <span>JSON</span>
                </li>
                <li id="ajax">
                    <span>AJAX</span>
                </li>
                <li id="responsive">
                    <span>Responsive Design</span>
                </li>
                <li id="optimization">
                    <span>Web Performance Optimization</span>
                </li>
                <li id="seo">
                    <span>SEO / Accessibility</span>
                </li>
                <li id="version">
                    <span>Version control</span>
                </li>
            </ul>
        </section>
    );
};

export default SectionHardSkills;
