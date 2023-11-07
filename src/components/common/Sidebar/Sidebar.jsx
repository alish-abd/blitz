import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Icon, List, CustomLink } from "@components/common";
import classNames from "classnames";
import { useTranslate } from "@helpers/hooks";
import {
  HOME_ROUTE,
} from "@utils/consts";
import "./Sidebar.scss";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { t } = useTranslate();
  const links = useMemo(
    () => [
      {
        id: 1,
        route: HOME_ROUTE,
        icon: "dashboard",
        name: t("SIDEBAR.MY_TESTS"),
      },
    ],
    [t]
  );

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <List
          className="sidebar__list"
          items={links}
          renderItem={({ id, route, icon, name, isDivider }) => (
            <li key={id} className="sidebar__item">
              <CustomLink
                to={route}
                className={classNames("sidebar__link", {
                  "sidebar__link--selected": pathname === route,
                })}
              >
                <Icon
                  className={classNames("icon", {
                    "icon--white": pathname === route,
                  })}
                  name={icon}
                />
                <p
                  className={classNames("sidebar__text", {
                    "sidebar__text--selected": pathname === route,
                  })}
                >
                  {name}
                </p>
              </CustomLink>
            </li>
          )}
        />
      </nav>
    </aside>
  );
}
