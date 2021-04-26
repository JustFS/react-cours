import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active">
          <li>accueil</li>
        </NavLink>
        <NavLink to="/about" activeClassName="nav-active">
          <li>à propos</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="nav-active">
          <li>contact</li>
        </NavLink>
        <NavLink to="/connexion" activeClassName="nav-active">
          <li>connexion</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
