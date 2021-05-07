import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);

  // Ne se joue qu'au lancement du composant
  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      {data &&
        data.map((country) => <Card key={country.name} country={country} />)}
    </div>
  );
};

export default Countries;
