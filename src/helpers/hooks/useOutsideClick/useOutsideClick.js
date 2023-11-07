import {useCallback, useEffect, useRef} from "react";

export default function useOutsideClick(callback) {
    const ref = useRef(null);

    const checkIfClickedOutside = useCallback((e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }, [callback]);

    useEffect(() => {
        document.addEventListener("mousedown", checkIfClickedOutside, true);
        return () => document.removeEventListener("mousedown", checkIfClickedOutside, true);
    }, [checkIfClickedOutside]);

    return ref;
};
