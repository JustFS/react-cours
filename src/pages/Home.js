import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home-page">
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
