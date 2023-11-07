import React from "react";
import { CustomLink, List } from "@components/common";
import { HOME_ROUTE, REPORTS_ROUTE, PRICING_ROUTE } from "@utils/consts";
import { useLocation } from "react-router-dom";
import { HeaderSubmenu } from "../HeaderSubmenu";

export default function HeaderMenu() {
  const { pathname } = useLocation();

const isAuth = pathname.includes('auth')

  const isRouteActive = (route) => {
    if (route == pathname) {
      return "header__menu-link-active";
    } else return "";
  };

  
  const MENU_LINKS = [
    {
      id: 1,
      name: "Practice",
      route: "",
      isSubmenu: true,
      isPrivate: true
    },
    {
      id: 2,
      name: "Reports",
      route: REPORTS_ROUTE,
      isSubmenu: false,
      isPrivate: true
    },
    {
      id: 3,
      name: "Pricing",
      route: PRICING_ROUTE,
      isSubmenu: false,
      isPrivate: false
    },
  ];

  const filteredMenuLinks = isAuth ? MENU_LINKS.filter(link => !link.isPrivate) : MENU_LINKS;


  return (
    <div>
      <List
        className="header__menu-links"
        items={filteredMenuLinks}
        renderItem={(item) => (
          <li  key={item.id}>
            <div
              className={`header__menu-link ${isRouteActive(item?.route)} ${item.isSubmenu ? "header__menu-link-sub" : ""}`}
             
              to={item?.route}
            >
              {item.name}
              {item.isSubmenu && <HeaderSubmenu />}
            </div>   
           
          </li>
        )}
      />
    </div>
  );
}
