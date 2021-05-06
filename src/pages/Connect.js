import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";

const Connect = () => {
  const [loginPage, setLoginPage] = useState(false);

  return (
    <div className="connect">
      <Navigation />
      <Logo />
      <h1>CONNECT</h1>
      <button
        style={{ background: loginPage ? null : "salmon" }}
        onClick={() => setLoginPage(false)}
      >
        S'inscrire
      </button>
      <button
        style={{ background: loginPage ? "salmon" : null }}
        onClick={() => setLoginPage(true)}
      >
        Se connecter
      </button>

      {loginPage ? <SigninForm /> : <SignupForm />}
    </div>
  );
};

export default Connect;
