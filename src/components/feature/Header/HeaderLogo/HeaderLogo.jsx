import React from "react";
import { Icon } from "@components/common";
import { HOME_ROUTE } from "@utils/consts";
import { useNavigate, useLocation } from "react-router-dom";

import "./HeaderLogo.scss";

export default function HeaderLogo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const routeToDashboard = () => navigate(HOME_ROUTE);

  const getLogoName = () => {
    if (pathname.includes("speaking")) return "logo-speaking";
    if (pathname.includes("listening")) return "logo-listening";
    if (pathname.includes("writing")) return "logo-writing";
    return "logo";
  };

  return <Icon className="header__logo" name={getLogoName()} handleClick={routeToDashboard} />;
}
