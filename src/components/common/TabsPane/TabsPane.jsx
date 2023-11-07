import classNames from "classnames";
import { List } from "../List";
import "./TabsPane.scss";

const TabsPane = (props) => {
  const { tabs, currentTabId, setCurrentTabId } = props;
  return (
    <List
      className={"tabs__tabs"}
      items={tabs}
      renderItem={(tab) => (
        <div
          key={tab.id}
          className={classNames("tabs__tab", {
            active: currentTabId === tab.id,
          })}
          onClick={() => setCurrentTabId(tab.id)}
        >
          {tab.name}
        </div>
      )}
    />
  );
};

export default TabsPane;
