import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);
  const [response, setResponse] = useState("");
  const [playOnce, setPlayOnce] = useState(true);

  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // joue le useEffect quand le composant se monte
  useEffect(() => {
    if (playOnce) {
      axios
        .get(
          "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        )
        .then((res) => {
          setCountriesData(res.data);
          setPlayOnce(false);
        });
    }

    const sortedCountry = () => {
      const countryObj = Object.keys(countriesData).map(
        (i) => countriesData[i]
      );

      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      sortedArray.length = rangeValue;
      setSortedCountries(sortedArray);
    };
    sortedCountry();

    // rejoue le useEffect quand le callback [] est appelé
  }, [rangeValue, countriesData, playOnce]);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <input
        onChange={(e) => setResponse(e.target.value)}
        type="text"
        placeholder="Entrez le nom d'un pays"
        value={response}
      />
      <br />
      {response && (
        <button onClick={() => setResponse("")}>Annuler recherche</button>
      )}

      <ul className="radios">
        {radios.map((continent) => {
          return (
            <li key={continent}>
              <input
                name="cont"
                type="radio"
                value={continent}
                id={continent}
                onChange={(e) => setSelectedRadio(e.target.value)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>

      <div className="range">
        <input
          type="range"
          min="1"
          max="250"
          onChange={(e) => setRangeValue(e.target.value)}
          value={rangeValue}
        />
        {rangeValue}
      </div>

      <ul>
        {sortedCountries
          .filter((country) =>
            country.name.toLowerCase().includes(response.toLowerCase())
          )
          .filter((country) => country.region.includes(selectedRadio))
          .map((country, index) => (
            <Card country={country} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
