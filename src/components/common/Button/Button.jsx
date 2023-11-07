import {Fragment} from "react";
import {BtnLoader} from "@components/common";
import classNames from "classnames";
import "./Button.scss";

export default function Button(props) {
    const {
        className, text, iconLeft,
        loading, loaderClassName, width,
        height, ...otherProps
    } = props;
    return (
        <button
            className={classNames("btn", className)}
            style={{width, height}}
            {...otherProps}
        >
            {
                loading
                    ? <BtnLoader className={loaderClassName}/>
                    : <Fragment>
                        {iconLeft && <div className={"btn__icon--left"}>
                            {iconLeft}
                        </div>}
                        {text}
                    </Fragment>
            }
        </button>
    );
};