import { MutableRefObject, useEffect, useRef } from "react";
// import { SyntheticEvent } from "../interfaces/models";

type Props = {
    children: JSX.Element;
};

export const findDegree = (
    element: HTMLDivElement,
    event: MouseEvent
): number => {
    const rect =
        element !== undefined ? element.getBoundingClientRect() : undefined;

    if (rect !== undefined) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const radianDegree = Math.atan2(y, x);
        const degree = (radianDegree * 180) / Math.PI + 180;

        return degree;
    } else {
        return 0;
    }
};

const useGradientBorder = (): MutableRefObject<HTMLDivElement> => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { current } = ref;

    if (current !== null) {
    }
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const degree = findDegree(ref.current, e);
            ref.current.style.setProperty(
                "--gradient-rotation",
                `${degree + 110}deg`
            );
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return ref;
};

const MuiGradientBorder = ({ children }: Props) => {
    const ref = useGradientBorder();
    return (
        <div ref={ref} className="gradient">
            {children}
        </div>
    );
};

export default MuiGradientBorder;
