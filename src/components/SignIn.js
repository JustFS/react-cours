import React from "react";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <h2>Se connecter</h2>
      <label htmlFor="">Pseudo</label>
      <br />
      <input type="text" />
      <br />
      <br />
      <label htmlFor="">Mot de passe</label>
      <br />
      <input type="password" name="" id="" />
      <br />
      <br />
      <input type="submit" value="Valider" />
    </div>
  );
};

export default SignIn;
