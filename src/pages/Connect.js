import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Connect = () => {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="connect-container">
      <Logo />
      <Navigation />
      <div className="btn-container">
        <button
          onClick={() => setSignUp(true)}
          style={{ background: signUp ? "salmon" : null }}
        >
          S'inscrire
        </button>
        <button
          onClick={() => setSignUp(false)}
          style={{ background: signUp ? null : "salmon" }}
        >
          Se Connecter
        </button>
      </div>
      {signUp ? <SignUp /> : <SignIn />}
    </div>
  );
};

export default Connect;
