import React, { useEffect, useState } from "react";
import axios from "axios";

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
      {data.map((country) => (
        <p>{country.name}</p>
        // A afficher : Drapeau, nom du pays, capitale, pop (séparateur de milliers)
      ))}
    </div>
  );
};

export default Countries;
