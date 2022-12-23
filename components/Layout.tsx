import { ReactNode, MutableRefObject, useEffect, useRef } from "react";
import { useSelector } from "react-redux/es/exports";
import Header from "./Header";

type Props = {
    children: ReactNode;
};

const usePremiumCursor = (): MutableRefObject<HTMLDivElement> => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const isCursorHover = useSelector(
        (state: any) => state.cursorStateStore.cursorState
    );

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            console.log("handleMouse called");
            console.log("");
            if (isCursorHover) {
                console.log("you succeeded to come here");

                ref.current.setAttribute(
                    "style",
                    `
                        top: ${event.pageY}px;
                        left: ${event.pageX}px;
                        animation: increaseScale 0.3s ease-in-out forwards;
                    `
                );
            }
            if (!isCursorHover) {
                ref.current.setAttribute(
                    "style",
                    `
                        top: ${event.pageY}px;
                        left: ${event.pageX}px;
                        animation: decreaseScale 0.5s ease-in-out forwards;
                     `
                );
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isCursorHover]);

    return ref;
};

const Layout = ({ children }: Props) => {
    const cursorRef = usePremiumCursor();
    return (
        <>
            <div ref={cursorRef} className="personalised-cursor"></div>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
