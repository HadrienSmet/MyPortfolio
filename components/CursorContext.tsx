import {
    createContext,
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

type MyCursorContextValue = [boolean, Dispatch<SetStateAction<boolean>>];

const defaultValue: MyCursorContextValue = [false, () => {}];

const MyCursorContext = createContext<MyCursorContextValue>(defaultValue);

export const useMyCursorContext = () => {
    const context = useContext(MyCursorContext);

    if (context) {
        return context;
    } else {
        return [];
    }
};

const CursorContext = ({ children }: any) => {
    const [isCursorHover, setIsCursorHover] = useState<boolean>(false);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (isCursorHover) {
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

    return (
        <MyCursorContext.Provider value={[isCursorHover, setIsCursorHover]}>
            <div ref={ref} className="personalised-cursor"></div>
            {children}
        </MyCursorContext.Provider>
    );
};

export default CursorContext;
