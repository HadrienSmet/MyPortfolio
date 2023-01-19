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

export const useWindowSize = () => {
    const isClient = typeof window !== "undefined";

    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        };
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getSize());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return windowSize;
};

export const handleScrollToTop = () => {
    window.scrollTo(0, 0);
};
