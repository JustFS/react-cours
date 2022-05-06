import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesNumber, setCountriesNumber] = useState(24);
  const continents = ["Africa", "America", "Europe", "Asia", "Oceania"];
  const [continent, setContinent] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesData(res.data));
  }, []);

  return (
    <div className="countries">
      <input
        type="range"
        min="1"
        max="250"
        onChange={(e) => setCountriesNumber(e.target.value)}
      />
      <span>{countriesNumber}</span>

      {continents.map((el) => (
        <>
          <input
            type="radio"
            name="continent"
            id={el}
            onChange={(e) => setContinent(e.target.id)}
            checked={continent === el}
          />
          <label htmlFor={el}>{el}</label>
        </>
      ))}

      {continent && (
        <button onClick={() => setContinent("")}>Annuler filtre</button>
      )}

      <div className="countries-container">
        {countriesData
          .filter((country) => country.region.includes(continent))
          .sort((a, b) => b.population - a.population)
          .slice(0, countriesNumber)
          .map((country, index) => (
            <div className="card" key={index}>
              <img
                src={country.flags.svg}
                alt={"Drapeau " + country.translations.fra.common}
              />
              <h2>{country.translations.fra.common}</h2>
              <h5>{country.capital}</h5>
              <p>Pop : {country.population.toLocaleString()}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
