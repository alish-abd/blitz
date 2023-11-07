import {useContext} from "react";
import {SelectContext} from "@helpers/context";

export default function useSelect() {
    const select = useContext(SelectContext);

    if (!select) {
        throw new Error("Error in creating the context");
    }
    return select;
};

