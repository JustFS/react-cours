import React, { useState } from "react";

const Form = () => {
  const [nom, setNom] = useState("julien");
  const [prenom, setPrenom] = useState();
  const panier = ["Stylo"];

  const handleForm = (e) => {
    // ne change pas la page après validation
    e.preventDefault();

    if (nom && prenom) {
      console.log(nom, prenom);
    } else {
      console.log("formulaire mal rempli !");
    }
  };

  return (
    <>
      <form onSubmit={(event) => handleForm(event)}>
        <input
          onChange={(event) => setNom(event.target.value)}
          type="text"
          placeholder="nom"
        />
        <input
          onChange={(event) => setPrenom(event.target.value)}
          type="text"
          placeholder="prenom"
        />
        <input type="submit" value="Valider" />
      </form>

      <div className="hooks">
        <p>Nom : {nom}</p>
        <p>Prénom : {prenom}</p>

        {prenom && (
          <p>Ce rendu ne s'affiche que lorsque le prénom est complété</p>
        )}

        <h2>Ternaire</h2>
        {/* test               valeur si vrai     si faux */}
        <p>{prenom === "Julien" ? "Le prénom existe" : "Pas de prénom"}</p>

        <h2>Panier</h2>
        <p>
          {panier.length} article{panier.length > 1 ? "s" : null} dans votre
          panier
        </p>
      </div>
    </>
  );
};

export default Form;
