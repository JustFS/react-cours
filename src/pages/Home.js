import axios from "axios";
import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  const [countriesData, setCountriesData] = useState([]);

  // Lancer une action quand le composant se monte
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="home-container">
      <Logo />
      <Navigation />
      <h1>Page d'accueil</h1>
    </div>
  );
};

export default Home;
