import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>ERREUR 404</h1>
      <NavLink to="/a-propos">Revenir à l'accueil</NavLink>
      {/* <a href="/"></a> */}
    </div>
  );
};

export default NotFound;
