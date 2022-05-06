import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img src="./logo192.png" alt="logo react" />
      <h2>React World</h2>
    </div>
  );
};

export default Logo;

// Via balise IMG
// Pour incorporer une balise <img> il faut stocker l'image dans "public"; pour aller chercher le chemin de cette image on doit faire comme si on était à l'entrée "public"

// Via le CSS/SCSS
// Stocker l'image dans SRC (dossier assets), aller chercher l'url depuis le fichier de style dans lequel on est "background: url(../../)"
