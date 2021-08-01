import React from "react";
import { NavigationStyled } from "./NavigationStyled";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes, basePath = "", ...props }) => {
  return (
    <NavigationStyled {...props}>
      <ul className="navList">
        {routes
          .filter((x) => !!x.name)
          .map(({ name, path, exact }) => (
            <li className="navItem" key={path}>
              <NavLink
                activeClassName="activeNavLink"
                to={basePath + path}
                exact={exact}
              >
                {name}
              </NavLink>
            </li>
          ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
