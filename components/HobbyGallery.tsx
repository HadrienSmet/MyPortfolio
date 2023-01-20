import Image from "next/image";
import React from "react";
import hobbiesData from "../utils/hobbiesData";

const HobbyGallery = () => {
    return (
        <ul className="about-me-page__hobbies-gallery">
            {hobbiesData.map(({ mediaUrl }, index) => (
                <li key={index}>
                    <Image
                        src={"/img/" + mediaUrl}
                        alt="picture of my hobby"
                        fill
                        sizes="(max-width: 1024px) 90vw"
                    />
                </li>
            ))}
        </ul>
    );
};

export default HobbyGallery;
