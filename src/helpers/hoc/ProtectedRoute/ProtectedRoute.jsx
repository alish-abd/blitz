import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ACCESS_TOKEN, AUTH_ROUTE } from "@utils/consts";
import { HOME_ROUTE } from "@utils/consts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem(ACCESS_TOKEN);
  
    useEffect(() => {
      if (!isAuth) {
        navigate(AUTH_ROUTE);
      }
    }, []);
  
    return children;
  }