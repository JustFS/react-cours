import React from "react";

const Card = ({ country }) => {
  return (
    <div className="card">
      <h2>{country.translations.fra.common}</h2>
      <img
        src={country.flags.svg}
        alt={"Drapeau " + country.translations.fra.common}
      />
      <h4>{country.capital}</h4>
      <p>Pop : {country.population.toLocaleString()}</p>
    </div>
  );
};

export default Card;
