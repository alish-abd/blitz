import InfiniteScroll from "react-infinite-scroller";
import { BtnLoader, Option, Search } from "@components/common";
import classNames from "classnames";
import "./DropdownList.scss";

export default function DropdownList(props) {
  const {
    showOptions,
    infinity,
    name,
    hasMore,
    onScrollChange,
    isSearch,
    search,
    options,
    selectedOptions,
    setSearch,
    isSearching,
    selectedOption,
    isUnDisabled,
  } = props;
  return (
    showOptions && (
      <ul
        className={classNames("dropdown-list", { scroll: options.length > 5 })}
      >
        {isSearch && (
          <Search
            className={"search--select"}
            placeholder={"FIELD.START_SEARCH"}
            autoComplete={"off"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
        {infinity ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={(e) => onScrollChange(e, name)}
            hasMore={hasMore}
            useWindow={false}
            loader={
              <div className={"dropdown-list__loader"} key={0}>
                <BtnLoader className={"btn-loader--blue"} />
              </div>
            }
          >
            {selectedOptions.length > 0
              ? selectedOptions.map((option) => (
                  <Option
                    key={option.id}
                    name={option.name}
                    value={option.value ?? option.id}
                    disabled={
                      !isUnDisabled &&
                      selectedOption &&
                      option.value === selectedOption.value
                    }
                  />
                ))
              : options.map((option) => (
                  <Option
                    key={option.id}
                    name={option.text}
                    value={option.value ?? option.id}
                    disabled={
                      !isUnDisabled &&
                      selectedOption &&
                      option.value === selectedOption.value
                    }
                  />
                ))}
          </InfiniteScroll>
        ) : selectedOptions.length > 0 ? (
          selectedOptions.map((option) => (
            <Option
              key={option.id}
              name={option.name}
              value={option.value ?? option.id}
              disabled={
                !isUnDisabled &&
                selectedOption &&
                option.value === selectedOption.value
              }
            />
          ))
        ) : !isSearching ? (
          options.length > 0 ? (
            options.map((option) => (
              <Option
                key={option.id}
                name={option.name}
                icon={option.icon}
                value={option.value ?? option.id}
                disabled={
                  !isUnDisabled &&
                  selectedOption &&
                  option.value === selectedOption.value
                }
              />
            ))
          ) : (
            <Option name={"No Data"} disabled={true} />
          )
        ) : (
          <div className={"dropdown-list__loader"}>
            <BtnLoader className={"btn-loader--blue"} />
          </div>
        )}
      </ul>
    )
  );
}
