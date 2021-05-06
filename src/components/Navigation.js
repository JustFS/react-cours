import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink exact to="/">
            accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/a-propos">à propos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="/connexion">connexion</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
