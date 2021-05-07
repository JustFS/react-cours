import React, { useState } from "react";

const SignupForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    alert(password);
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <h2>S'inscrire</h2>
      <label htmlFor="pseudo">Pseudo</label>
      <br />
      <input required type="text" id="pseudo" />
      <br /> <br />
      <label htmlFor="">Mot de passe</label>
      <br />
      <input
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {password.length > 4 && password.length < 8 && (
        <p>Veuillez entrez un mdp de 8 caractères minimum</p>
      )}
      <br /> <br />
      <label>Confirmer mot de passe</label>
      <br />
      <input
        required
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {confirmPassword.length > 4 && password !== confirmPassword && (
        <p>Les mots de passe ne correspondent pas</p>
      )}
      <input type="submit" />
    </form>
  );
};

export default SignupForm;
