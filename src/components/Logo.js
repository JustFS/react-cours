import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img src="./img/logo192.png" alt="logo" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;

// Importer l'image du logo depuis une balise IMG
// on part de index.html <img src="./monchemin" >

// Importer l'image de fond en background (sass) doit etre stockée dans SRC
// background: url(../cheminphoto)
