import React from "react";

const Card = ({ country }) => {
  const numberParser = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="card">
      <img src={country.flag} alt={country.name} />
      <div className="country-infos">
        <h2>{country.name}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. : {numberParser(country.population)}</p>
      </div>
    </div>
  );
};

export default Card;
