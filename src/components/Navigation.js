import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="nav-active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="nav-active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/a-propos" activeClassName="nav-active">
            À propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
