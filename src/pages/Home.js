import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <h1>ACCUEIL</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos optio
        porro eligendi voluptatum tempore voluptas adipisci accusantium
        voluptate, doloribus in quasi neque inventore voluptatibus nemo sit
        temporibus sequi asperiores eveniet.
      </p>
    </div>
  );
};

export default Home;
