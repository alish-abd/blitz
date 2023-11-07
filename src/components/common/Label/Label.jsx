import {Fragment} from "react";
import classNames from "classnames";
import "./Label.scss";

export default function Label({className, htmlFor, label}) {
    return (
        <Fragment>
            {
                label && <label className={classNames("label", className)} htmlFor={htmlFor}>
                    <p className={"label__text"}>
                        {
                            label
                        }
                    </p>
                </label>
            }
        </Fragment>
    );
};