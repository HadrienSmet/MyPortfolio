import Head from "next/head";
import { useEffect, useState } from "react";
import SectionAbout from "../components/pageIndex/about/SectionAbout";
import SectionContact from "../components/pageIndex/contact/SectionContact";
import SectionIntro from "../components/pageIndex/intro/SectionIntro";
import { useWindowSize } from "../hooks/useWindowSize";

const useIndexOnScroll = () => {
    const windowSize = useWindowSize();
    const [isScrollAble, setIsScrollAble] = useState(false);
    const [screenWidth, setScreenWidth] = useState<number | undefined>(
        undefined
    );
    useEffect(() => {
        if (windowSize.width === undefined) {
            setScreenWidth(() => window.innerWidth);
        } else {
            setScreenWidth(() => windowSize.width);
        }
    }, [windowSize.width]);

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (isScrollAble === false) event.preventDefault();
        };

        const isBrowser = typeof window !== "undefined";
        const contactEl =
            isBrowser && (document.getElementById("contact") as Element);

        const options = {
            root: null,
            threshold: 0.7,
            rootMargin: "0px",
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsScrollAble(() => true);
                    document.body.classList.remove("fixed");
                } else {
                    setIsScrollAble(() => false);
                    document.body.classList.add("fixed");
                }
            });
        }, options);
        if (contactEl !== false) observer.observe(contactEl);

        if (screenWidth && screenWidth >= 1025) {
            window.addEventListener("wheel", handleScroll, { passive: false });
            return () => {
                window.removeEventListener("wheel", handleScroll);
            };
        }
    }, [screenWidth, isScrollAble]);
};

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useIndexOnScroll();
    return (
        <>
            <Head>
                <title>Hadrien Smet</title>
                <meta
                    name="description"
                    content="Welcome on my portfolio. I am a web developer specialized in front-end. I use React, typeScript and Next to build the applications that my clients desires"
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
