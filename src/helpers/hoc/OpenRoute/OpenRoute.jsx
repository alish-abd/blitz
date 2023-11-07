import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ACCESS_TOKEN } from "@utils/consts";
import { HOME_ROUTE } from "@utils/consts";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

export default function OpenRoute({ children }) {

  const {isAuthCompleted} = useSelector(state => state.auth)
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (isAuthCompleted || isAuth) {
      navigate(HOME_ROUTE);
    }
  }, [isAuth]);

  return children;
}