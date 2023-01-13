import { useEffect, useState } from "react";

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener("mousemove", updateMouseMove);
        return () => document.removeEventListener("mousemove", updateMouseMove);
    }, []);

    return mousePosition;
};

export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const updateScrollPosition = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", updateScrollPosition);
        return () => {
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, []);

    return scrollY;
};
