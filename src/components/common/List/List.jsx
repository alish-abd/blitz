import classNames from "classnames";

export default function List({className, items, renderItem, firstItem, lastItem}) {
    return (
        <ul className={classNames("list", className)}>
            {
                firstItem
            }
            {
                items.map(renderItem)
            }
            {
                lastItem
            }
        </ul>
    );
};