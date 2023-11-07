import { Icon } from "@components/common";
import classNames from "classnames";
import "./DropdownOption.scss";

export default function DropdownOption({
  showOptions,
  selectedOption,
  placeholder,
  showOptionsHandler,
  icon,
}) {
  return (
    <div
      className={classNames("dropdown-option", { active: showOptions })}
      onClick={showOptionsHandler}
    >
      <div className={"dropdown-option__name"}>
        {icon && <Icon name={icon} />}
        <p className={"dropdown-option__text"}>
          {selectedOption.name !== undefined &&
          selectedOption.value !== undefined &&
          selectedOption.value !== null
            ? selectedOption.name
            : placeholder}
        </p>
      </div>
      <Icon name={showOptions ? "arrow-up" : "arrow-down"} />
    </div>
  );
}
