import React from "react";
import axios from "axios";

const Countries = () => {
  axios
    .get(
      "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
    )
    .then((res) => console.log(res.data));

  return (
    <div>
      <h1>Countries</h1>
    </div>
  );
};

export default Countries;
