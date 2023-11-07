import {useEffect, useState} from "react";
import {useWindowSize} from "@helpers/hooks";


export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false),
        windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width < 481) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowSize]);

    return isMobile;
};