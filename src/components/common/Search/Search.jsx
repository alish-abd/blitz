import {Icon, Label} from "@components/common";
import classNames from "classnames";
import "./Search.scss";

export default function Search(props) {
    const {
        className, label, ...otherProps
    } = props;
    return (
        <div className={"search-wrapper"}>
            <Label htmlFor={"search"} label={label}/>
            <div className={classNames("search", className)}>
                <input
                    className={"search__field"}
                    type={"search"}
                    id={"search"}
                    {...otherProps}
                />
                <Icon
                    className={"search__icon"}
                    name={"search"}
                />
            </div>
        </div>
    );
};