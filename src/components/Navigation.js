import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <NavLink exact to="/" activeClassName="nav-active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="nav-active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="nav-active">
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
