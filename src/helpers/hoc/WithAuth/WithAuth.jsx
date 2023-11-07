import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { accessToken } from "@api/xhr/axios/axios";
import { HOME_ROUTE, ACCESS_TOKEN, AUTH_ROUTE } from "@utils/consts";
import { useSelector } from "react-redux";
import { BtnLoader } from "@components/common";

export default function WithAuth({ children, openRoutes }) {
    const { isAuthCompleted } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(!!accessToken);
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsAuth(!!localStorage.getItem(ACCESS_TOKEN));

        if (isAuthCompleted || isAuth) {
            if (openRoutes.includes(pathname)) {
                navigate(HOME_ROUTE);
                setIsLoading(false);
                return;
            }
        } else {
            if (!openRoutes.includes(pathname)) {
                navigate(AUTH_ROUTE);
                setIsLoading(false);
                return;
            }
        }
        setIsLoading(false);
    }, [isAuthCompleted, accessToken]);

    useEffect(() => {
        setIsAuth(!!localStorage.getItem(ACCESS_TOKEN));
    }, [pathname]);

    if (isLoading) {
        return <BtnLoader className={'btn-loader-bg-large'} />;  // or return a loading spinner
    }
    return children;
}
