import { useEffect } from "react";

const useHardSkillsOnScroll = () => {
    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        const linkEl = isBrowser && document.querySelectorAll(".hard-skill");

        const options = {
            root: null,
            threshold: 0,
            rootMargin: "0px",
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);
        if (linkEl !== false)
            linkEl.forEach((el) => {
                observer.observe(el);
            });
    }, []);
};

const SectionHardSkills = () => {
    useHardSkillsOnScroll();
    return (
        <section className="about-work hard-skills-side">
            <h2>Hard skills</h2>
            <ul>
                <li className="hard-skill" id="dom">
                    <span>DOM manipulation</span>
                </li>
                <li className="hard-skill" id="json">
                    <span>JSON</span>
                </li>
                <li className="hard-skill" id="ajax">
                    <span>AJAX</span>
                </li>
                <li className="hard-skill" id="responsive">
                    <span>Responsive Design</span>
                </li>
                <li className="hard-skill" id="optimization">
                    <span>Web Performance</span>
                </li>
                <li className="hard-skill" id="seo">
                    <span>SEO</span>
                </li>
                <li className="hard-skill" id="accessibility">
                    <span>Accessibility</span>
                </li>
                <li className="hard-skill" id="version">
                    <span>Version control</span>
                </li>
            </ul>
        </section>
    );
};

export default SectionHardSkills;
