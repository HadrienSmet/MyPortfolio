import React from "react";
import { FaGitAlt } from "react-icons/fa";
import SvgCSS from "../../assets/svg/SvgCSS";
import SvgFigma from "../../assets/svg/SvgFigma";
import SvgVsCode from "../../assets/svg/SvgVsCode";
import SvgHTML from "../../assets/svg/SvgHTML";
import SvgJavaScript from "../../assets/svg/SvgJavaScript";
import SvgMongoDB from "../../assets/svg/SvgMongoDB";
import SvgNextJS from "../../assets/svg/SvgNextJS";
import SvgNodeJS from "../../assets/svg/SvgNodeJS";
import SvgReact from "../../assets/svg/SvgReact";
import SvgSass from "../../assets/svg/SvgSass";
import SvgThreeJS from "../../assets/svg/SvgThreeJS";
import SvgTypeScript from "../../assets/svg/SvgTypeScript";
import SvgSocketIO from "../../assets/svg/SvgSocketIO";

const SectionTools = () => {
    return (
        <section className="about-work tools-side">
            <h2>My tools</h2>
            <div className="tools-container">
                <SvgHTML />
                <SvgCSS />
                <SvgSass />
                <SvgJavaScript />
                <SvgTypeScript />
                <SvgNodeJS />
                <SvgMongoDB />
                <SvgReact />
                <SvgNextJS />
                <SvgSocketIO />
                <SvgThreeJS />
                <FaGitAlt />
                <SvgVsCode />
                <SvgFigma />
            </div>
        </section>
    );
};

export default SectionTools;
