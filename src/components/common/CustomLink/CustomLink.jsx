import { NavLink } from "react-router-dom";

export default function CustomLink(props) {
  const { children, className, isExternal = false, to, ...otherProps } = props;
  return isExternal ? (
    <a className={className} href={to} {...otherProps}>
      {children}
    </a>
  ) : (
    <NavLink
      className={className}
      activeclassname={"menu__link-active"}
      to={to}
    >
      {children}
    </NavLink>
  );
}
