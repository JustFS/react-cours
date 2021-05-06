import React, { useState } from "react";

const SigninForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <form className="signinForm" onSubmit={handleSubmit}>
      <h2>Se connecter</h2>
      <label htmlFor="pseudo">Pseudo</label>
      <br />
      <input
        type="text"
        id="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
      />
      <br /> <br />
      <label htmlFor="">Mot de passe</label>
      <br />
      <input type="password" name="" id="" />
      <input type="submit" />
    </form>
  );
};

export default SigninForm;
