import React, { useState } from "react";
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([]);

  axios
    .get(
      "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
    )
    .then((res) => setData(res.data));

  return (
    <div className="countries">
      <ul>
        {data.map((country) => (
          <li className="card">
            <h2>{country.name}</h2>
            {/* Afficher Drapeau, la capitale & la population (séparateur de milliers) */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
