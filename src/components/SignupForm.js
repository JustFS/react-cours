import React from "react";

const SignupForm = () => {
  return (
    <form action="" className="signup">
      <h2>S'inscrire</h2>
      <label htmlFor="pseudo">Pseudo</label>
      <br />
      <input type="text" id="pseudo" />
      <br /> <br />
      <label htmlFor="">Mot de passe</label>
      <br />
      <input type="password" name="" id="" />
      <br /> <br />
      <label htmlFor="">Confirmer mot de passe</label>
      <br />
      <input type="password" name="" id="" />
      <input type="submit" />
    </form>
  );
};

export default SignupForm;
