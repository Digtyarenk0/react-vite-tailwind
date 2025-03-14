import { useEffect, useState } from "react";

export enum Breakpoint {
    MOBILE = 640,
    TABLET = 940,
    LAPTOP = 1240
}

export const useMediaQuery = (breakpoint: number): boolean => {
    // @ts-ignore
    const [isCurrentBreakpoint, setCurrentBreakpoint] = useState(window.visualViewport.width <= breakpoint);

    useEffect(() => {
        // @ts-ignore
        const handleResize = () => setCurrentBreakpoint(window?.visualViewport.width <= breakpoint);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isCurrentBreakpoint;
};
