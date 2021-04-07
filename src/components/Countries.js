import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);

  // joue le useEffect quand le composant se monte
  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setCountriesData(res.data));

    // rejoue le useEffect quand le callback [] est appelé
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul>
        {countriesData.map((country, index) => (
          <Card country={country} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
