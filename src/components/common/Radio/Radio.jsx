import classNames from "classnames";
import "./Radio.scss";

export default function Radio({
  className,
  label,
  labelClassName,
  ...otherProps
}) {
  return (
    <div className={classNames("radio", className)}>
      <label className={"radio__label"} htmlFor={otherProps.id}>
        <input type={"radio"} className={"radio__input"} {...otherProps} />
        <span className={"radio__box"} />
        <p className={"radio__text"}>{label}</p>
      </label>
    </div>
  );
}
