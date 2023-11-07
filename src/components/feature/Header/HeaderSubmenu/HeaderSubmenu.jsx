import React from "react";
import { SPEAKING_ROUTE, WRITING_ROUTE } from "@utils/consts";
import { CustomLink, Icon, List } from "@components/common";
import "../HeaderMenu/HeaderMenu.scss";

export default function HeaderSubmenu() {
  const SUBMENU_LINKS = [
    {
      id: 1,
      name: "Speaking practice",
      route: SPEAKING_ROUTE,
      icon: "speaking_section",
      isFirst: true,
    },

    {
      id: 2,
      name: "Writing practice",
      route: WRITING_ROUTE,
      icon: "writing_section",
    },
    {
      id: 3,
      name: "Reading practice",
      route: "",
      icon: "reading_section",
    },
    {
      id: 4,
      name: "Listening practice",
      route: "",
      icon: "listening_section",
      isLast: true,
    },
  ];

  return (
    <div>
      <List
        className={"submenu__links"}
        items={SUBMENU_LINKS}
        renderItem={(item) => (
          <li
            key={item.id}
            className={`submenu__link ${item.isLast && `submenu__link-last`} ${
              item.isFirst && `submenu__link-first`
            }`}
          >
            <CustomLink to={item.route}>
              <div className="submenu__link-item">
                <Icon name={item.icon} className="submenu__link-icon" />
                {item.name}
              </div>
            </CustomLink>
            {!item.isLast && <hr />}
          </li>
        )}
      />
    </div>
  );
}
