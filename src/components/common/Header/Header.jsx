import { useEffect, useState, memo } from "react";
import { useWindowSize } from "@helpers/hooks";
import { useLocation } from "react-router-dom";
import { HeaderLogo, HeaderMenu } from "@components/feature";
import { Button } from "../Button";
import { ACCESS_TOKEN } from "@utils/consts";
import "./Header.scss";

export default memo(function Header() {
  const { pathname } = useLocation();
  const isAuth = pathname.includes("auth");
  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.href = `/auth`;
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false),
    windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 1023) {
      setIsMenuOpen(false);
    }
  }, [windowSize]);
  return (
    <header className={"header"}>
      <nav className={`header__nav ${isAuth && 'header__nav-auth'}`}>
        <HeaderLogo />
        {!isAuth && (
          <>
            <HeaderMenu />
            <Button
              className="btn--danger-text btn__out"
              text={"Log out"}
              onClick={() => logout()}
            />
          </>
        )}
      </nav>
    </header>
  );
});
