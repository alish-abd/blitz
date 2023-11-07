import {useSelect} from "@helpers/hooks";
import {Icon} from "@components/common";
import classNames from "classnames";
import "./Option.scss";

export default function Option({className, name, value, icon, disabled, active}) {
    const {changeSelectedOption} = useSelect();
    return (
        <li
            className={classNames("option", className, {disabled: disabled, active})}
            onClick={() => changeSelectedOption({name, value})}
        >
            {
                icon && <Icon name={icon}/>
            }
            <p className={"option__text"}>
                {
                    name
                }
            </p>
        </li>
    );
};