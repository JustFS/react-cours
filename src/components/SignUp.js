import React, { useState } from "react";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="sign-up-container">
      <h2>Inscrivez-vous</h2>

      <label htmlFor="">Pseudo</label>
      <br />
      <input type="text" />
      <br />
      <br />

      <label htmlFor="">Mot de passe</label>
      <br />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      {password.length < 8 && password.length > 3 && (
        <p>Le mot de passe ête de 8 caractères minimum</p>
      )}
      <br />
      <br />
      <label htmlFor="">Confirmer le mot de passe</label>
      <br />
      <input type="password" onChange={(e) => setConfirmPass(e.target.value)} />
      {password !== confirmPass && confirmPass.length > 3 && (
        <p>Les mots de passe ne correspondent pas</p>
      )}
      <br />
      <br />

      <input type="submit" value="Valider" />
    </div>
  );
};

export default SignUp;
