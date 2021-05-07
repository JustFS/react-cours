import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [radioChoice, setRadioChoice] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [rangeValue, setRangeValue] = useState(36);
  const [isCrescent, setIsCrescent] = useState(false);
  const radios = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  // Ne se joue qu'au lancement du composant
  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries-container">
      <ul className="radio-container">
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              name="continents"
              id={continent}
              onChange={(e) => setRadioChoice(e.target.id)}
              checked={continent === radioChoice}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      <button
        style={{ visibility: radioChoice ? "visible" : "hidden" }}
        onClick={() => setRadioChoice("")}
      >
        Annuler recherche
      </button>
      <input
        type="range"
        style={{ width: "80%" }}
        max="249"
        defaultValue={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
      <span>{parseInt(rangeValue) + 1}</span>
      <input
        type="text"
        placeholder="Entrez le nom d'un pays (en anglais)"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        style={{ background: isCrescent && "salmon" }}
        onClick={() => setIsCrescent(true)}
      >
        Tri croissant
      </button>
      <button
        style={{ background: !isCrescent && "salmon" }}
        onClick={() => setIsCrescent(false)}
      >
        Tri décroissant
      </button>

      <div className="countries">
        {data &&
          data
            .filter((country) => country.region.includes(radioChoice))
            .filter((country) =>
              country.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .sort((a, b) => {
              if (isCrescent) {
                return a.population - b.population;
              } else {
                return b.population - a.population;
              }
            })
            .filter((country, index) => index <= rangeValue)
            .map((country) => <Card key={country.name} country={country} />)}
      </div>
    </div>
  );
};

export default Countries;
