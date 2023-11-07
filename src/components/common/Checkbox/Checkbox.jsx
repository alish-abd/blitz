import classNames from "classnames";
import "./Checkbox.scss";

const Checkbox = (props) => {
  const {
    className,
    label,
    labelClassName,
    inputClassName,
    name,
    handleChange,
    checked,
    disabled,
    ...otherProps
  } = props;
  return (
    <div className={classNames("checkbox", className)}>
      {label && (
        <label
          htmlFor={name}
          className={classNames("checkbox__label", labelClassName)}
        >
          {label}
        </label>
      )}
      <input
        className={classNames("checkbox__input", inputClassName)}
        name={name}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        {...otherProps}
      />
    </div>
  );
};

export default Checkbox;
