import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import mainRouters from "../../routers/mainRouters";

const Navigation = () => {
  /* const location = useLocation();*/
  return (
    <ul className="linkList">
      {mainRouters.map(({ path, name, exact }) => (
        <li key={path}>
          <NavLink
            to={{
              pathname: path,
              /*state: { from: location.pathname },*/
            }}
            className="link"
            activeClassName="activeLink"
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
