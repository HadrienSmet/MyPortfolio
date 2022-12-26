import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import pictureAboutWork from "../assets/images/bestActor.jpg";
import pictureAboutMe from "../assets/images/Margot-Robbie.jpg";

export const tellMeRatio = (event: MouseEvent) => {
    const windowWidth = window.innerWidth;

    const ratioX = (event.clientX / windowWidth) * 100;
    console.log(ratioX);
};

const SectionAbout = () => {
    useEffect(() => {
        const doubleImg: HTMLDivElement | null = document.querySelector(
            ".about__double-img-container"
        );
        const firstImgContainer: HTMLDivElement | null = document.querySelector(
            ".about__first-img-container"
        );
        const secondImgContainer: HTMLDivElement | null =
            document.querySelector(".about__second-img-container");
        const workLink: HTMLDivElement | null = document.querySelector(
            ".about__dynamic-links__too-work"
        );
        const myLink: HTMLDivElement | null = document.querySelector(
            ".about__dynamic-links__too-me"
        );
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const windowWidth = window.innerWidth;
            const ratioX = (e.clientX / windowWidth) * 100;

            if (doubleImg !== null) {
                let translateInPx = 100 - 2 * ratioX;
                doubleImg.style.setProperty(
                    "--div-translation",
                    `${translateInPx}px`
                );
            }
            if (
                firstImgContainer !== null &&
                secondImgContainer !== null &&
                myLink !== null &&
                workLink !== null
            ) {
                if (ratioX <= 25) {
                    firstImgContainer.style.setProperty(
                        "--first-div-width",
                        `100%`
                    );
                    secondImgContainer.style.setProperty(
                        "--second-div-width",
                        `0%`
                    );
                    workLink.style.setProperty("--work-opacity", "1");
                    workLink.style.setProperty("--work-translateX", "-25px");
                    myLink.style.setProperty("--my-opacity", "0");
                } else if (ratioX >= 75) {
                    firstImgContainer.style.setProperty(
                        "--first-div-width",
                        `0%`
                    );
                    secondImgContainer.style.setProperty(
                        "--second-div-width",
                        `100%`
                    );
                    workLink.style.setProperty("--work-opacity", "0");
                    myLink.style.setProperty("--my-opacity", "1");
                    myLink.style.setProperty("--my-transleX", "25px");
                } else {
                    firstImgContainer.style.setProperty(
                        "--first-div-width",
                        `${100 - (ratioX - 25) * 2}%`
                    );
                    secondImgContainer.style.setProperty(
                        "--second-div-width",
                        `${(ratioX - 25) * 2}%`
                    );
                    workLink.style.setProperty(
                        "--work-opacity",
                        `${(100 - (ratioX - 25) * 2) / 100}`
                    );
                    myLink.style.setProperty(
                        "--my-opacity",
                        `${((ratioX - 25) * 2) / 100}`
                    );
                    myLink.style.setProperty(
                        "--my-translateX",
                        `${ratioX - 50}px`
                    );
                    workLink.style.setProperty(
                        "--work-translateX",
                        `${ratioX - 50}px`
                    );
                }
            }
        };

        window.addEventListener("mousemove", handlePictureOnMouseMove);
        return () =>
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
    }, []);

    return (
        <section className="about">
            <div className="about__dynamic-links-container">
                <div id="work" className="about__dynamic-links__too-work">
                    <Link href="/aboutMyWork">
                        More about <em>My work</em>
                    </Link>
                </div>
                <div id="me" className="about__dynamic-links__too-me">
                    <Link href="/aboutMe">
                        More about <em>Me</em>
                    </Link>
                </div>
            </div>
            <div className="about__double-img-container">
                <div className="about__first-img-container">
                    <Image
                        src={pictureAboutWork}
                        alt="Illustration de moi-même"
                        width={550}
                        height={420}
                    />
                </div>
                <div className="about__second-img-container">
                    <Image
                        src={pictureAboutMe}
                        alt="Photos de moi-même"
                        width={550}
                        height={420}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;
