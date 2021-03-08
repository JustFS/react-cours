import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");

  // joue ce qui est à l'intérieur quand le component est monté
  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h2>Les pays du monde</h2>

      <input
        onChange={(event) => setCountrySearch(event.target.value)}
        type="text"
        placeholder="Entrez le nom d'un pays"
      />

      <ul>
        {data
          .filter((country) =>
            country.name.toLowerCase().includes(countrySearch.toLowerCase())
          )
          .map((country) => (
            <Card key={country.name} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
