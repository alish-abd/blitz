import Checkbox from "../Checkbox";
import { Dropdown } from "../Dropdown";
import { Input } from "../Input";
import { Label } from "../Label";
// import { Radio } from "../Radio";
import "./FormItem.scss";
import {Radio} from "@components/common"

const FormItem = ({ item, handleChange }) => {
  if (item.field === "input") {
    return (
      <Input
        className={item.className}
        label={item.label}
        labelClassName={item.labelClassName}
        name={item.name}
        type={item.type}
        inputClassName={item.inputClassName}
        handleChange={(e) => handleChange(e, item.field, item.name)}
        value={item.value}
        placeholder={item.placeholder}
        disabled={item.disabled}
      />
    );
  }
  if (item.field === "checkbox") {
    return (
      <Checkbox
        className={item.className}
        label={item.label}
        labelClassName={item.labelClassName}
        inputClassName={item.inputClassName}
        name={item.name}
        handleChange={handleChange}
        checked={item.value}
        disabled={item.disabled}
      />
    );
  }

  if (item.field === "radio") {
    return (
      <li key={item.id} className={"radio__body"}>
        <Label className={"label_v2"} htmlFor={""} label={item.label} />
        <p className={"radio__helper"}>{item.placeholder}</p>
        <div className={"radio__options"}>
          {item.options.map((option) => (
            <Radio
              key={option.id}
              id={option.id}
              name={option.name}
              label={option.label}
              checked={item.value === option.value}
              value={option.value}
              onChange={(e) => handleChange(e, item.field, item.name)}
            />
          ))}
        </div>
      </li>
    );
  }

  if (item.field === "dropdown") {
    return (
      <li key={item.id} className={"dropdown__body"}>
        <Dropdown
          className={"dropdown"}
          label={item.label}
          labelClassName={"label__v2"}
          defaultValue={item.defaultValue}
          handleChange={(e) =>
            handleChange(e, item.field, item.name, item.options)
          }
          placeholder={item.placeholder}
          name={item.name}
          options={item.options}
          icon={item.icon}
          method={item.method}
          isSearch={item.isSearch}
        />
      </li>
    );
  }
};

export default FormItem;
