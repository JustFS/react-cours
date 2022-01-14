import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home-container">
      <Logo />
      <Navigation />
      <h1>Page d'accueil</h1>
    </div>
  );
};

export default Home;
