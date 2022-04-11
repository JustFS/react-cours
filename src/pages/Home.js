import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [rangeValue, setRangeValue] = useState(24);

  // Lancer une action quand le composant se monte
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesData(res.data));
  }, []);

  return (
    <div className="home-container">
      <Logo />
      <Navigation />
      <input
        type="range"
        min="1"
        max="250"
        defaultValue={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
      <span>{rangeValue}</span>
      <div className="countries">
        {countriesData &&
          countriesData
            // Trier par nom
            // .sort((a, b) => a.name.common.localeCompare(b.name.common))
            // Trier par population
            .sort((a, b) => b.population - a.population)
            // Filter des pays
            // .filter((country) => country.region.includes("Eur"))
            // Limiter l'affichage à un certain nombre
            .slice(0, rangeValue)
            .map((country) => <Card country={country} key={country.cca3} />)}
      </div>
    </div>
  );
};

export default Home;
