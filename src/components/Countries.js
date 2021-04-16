import React, { useState } from "react";
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([]);

  axios
    .get(
      "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
    )
    .then((res) => setData(res.data));

  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  console.log(numberFormat(3404039403490));

  return (
    <div className="countries">
      <ul>
        {data.map((country) => (
          <li className="card">
            <img src={country.flag} alt="" />
            <div className="infos">
              <h2>{country.name}</h2>
              <h4>{country.capital}</h4>
              <p>Pop. {numberFormat(country.population)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
