import Head from "next/head";
import { useEffect } from "react";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import SectionIntro from "../components/SectionIntro";
import { useWindowSize } from "../utils/hooks";

const useIndexOnScroll = () => {
    const screenWidth = useWindowSize().width;
    let scrollIndex: number = 1;

    useEffect(() => {
        const scrollToIndex = () => {
            const minScrollDist =
                window.innerHeight > 950 ? window.innerHeight : 950;
            if (scrollIndex === 1) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (scrollIndex === 2) {
                window.scrollTo({
                    top: minScrollDist,
                    behavior: "smooth",
                });
            } else {
                window.scrollTo({
                    top: 2.5 * minScrollDist + 383,
                    behavior: "smooth",
                });
            }
        };

        const increaseScrollIndex = () => {
            if (scrollIndex <= 3) {
                if (scrollIndex < 3) {
                    scrollIndex++;
                }
                scrollToIndex();
            }
        };
        const decreaseScrollIndex = () => {
            if (scrollIndex >= 1) {
                if (scrollIndex > 1) {
                    scrollIndex--;
                }
                scrollToIndex();
            }
        };
        const handleScroll = (event: WheelEvent) => {
            console.log(event);
            if (event.deltaY > 0) {
                increaseScrollIndex();
            } else {
                decreaseScrollIndex();
            }
        };

        if (screenWidth && screenWidth > 1025) {
            window.addEventListener("wheel", handleScroll);
            return () => {
                window.removeEventListener("wheel", handleScroll);
            };
        }
    }, [scrollIndex, screenWidth]);
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
