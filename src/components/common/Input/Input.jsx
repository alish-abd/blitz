import classNames from "classnames";
import "./Input.scss";

const Input = (props) => {
  const {
    className,
    label,
    labelClassName,
    name,
    type,
    inputClassName,
    handleChange,
    value,
    placeholder,
    disabled,
    ...otherProps
  } = props;
  return (
    <div className={classNames("input", className)}>
      {label && (
        <label
          className={classNames("input__label", labelClassName)}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className={classNames("input__input", inputClassName)}
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
