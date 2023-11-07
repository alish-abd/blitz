import {createContext} from "react";

const SelectContext = createContext({
    selectedOption: "",
    changeSelectedOption: () => {}
});

export default SelectContext;