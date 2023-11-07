import { useCallback, useEffect, useState } from "react";
import { useDebounce, useOutsideClick } from "@helpers/hooks";
import { SelectProvider } from "@helpers/providers";
import { Label, DropdownList, DropdownOption } from "@components/common";
import classNames from "classnames";
import "./Dropdown.scss";

export default function Dropdown(props) {
  const {
    className,
    label,
    placeholder,
    defaultValue,
    icon,
    handleChange,
    labelClassName,
    infinity,
    name,
    hasMore,
    onScrollChange,
    isSearch,
    options,
    method,
    isUnDisabled = false,
    isResetFilter,
  } = props;
  const [selectedOptions, setSelectedOptions] = useState([]),
    [selectedOption, setSelectedOption] = useState(defaultValue || {}),
    [showOptions, setShowOptions] = useState(false),
    [search, setSearch] = useState(""),
    [isSearching, setIsSearching] = useState(false),
    [isClear, setIsClear] = useState(false),
    debounceSearch = useDebounce(search, 700);

  const showOptionsHandler = () =>
    setShowOptions((showOptions) => !showOptions);

  const ref = useOutsideClick(() => setShowOptions(false));

  const selectOptionHandler = useCallback(
    (option) => {
      setSelectedOption(option);
      handleChange(option);
      setSearch("");
      setSelectedOptions([]);
      setShowOptions(false);
    },
    [handleChange]
  );

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (isClear && search.length === 0) {
      setIsSearching(true);
      method({ search: null })
        .then(() => {
          setIsSearching(false);
          setIsClear(false);
        })
        .finally(() => {
          setIsSearching(false);
          setIsClear(false);
        });
    }
  }, [isClear, search]);

  useEffect(() => {
    if (debounceSearch) {
      setIsSearching(true);
      method({ search: debounceSearch })
        .then(() => {
          setIsSearching(false);
          setIsClear(true);
        })
        .finally(() => {
          setIsSearching(false);
          setIsClear(true);
        });
    }
  }, [debounceSearch]);

  useEffect(() => {
    if (isResetFilter) {
      setSelectedOption({});
    }
  }, [isResetFilter]);
  return (
    <SelectProvider
      selectedOption={selectedOption}
      changeSelectedOption={selectOptionHandler}
    >
      <div className={classNames("dropdown-wrapper", className)}>
        <Label className={labelClassName} htmlFor={"select"} label={label} />
        <div className={"dropdown"} ref={ref}>
          <DropdownOption
            showOptions={showOptions}
            selectedOption={selectedOption}
            placeholder={placeholder}
            icon={icon}
            showOptionsHandler={showOptionsHandler}
          />
          <DropdownList
            showOptions={showOptions}
            hasMore={hasMore}
            infinity={infinity}
            name={name}
            options={options}
            selectedOption={selectedOption}
            selectedOptions={selectedOptions}
            defaultValue={defaultValue}
            isSearch={isSearch}
            search={search}
            setSearch={setSearch}
            isSearching={isSearching}
            onScrollChange={onScrollChange}
            isUnDisabled={isUnDisabled}
          />
        </div>
      </div>
    </SelectProvider>
  );
}
