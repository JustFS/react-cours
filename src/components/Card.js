import React from "react";

const Card = ({ country }) => {
  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <img src={country.flag} alt="" />
      <div className="infos">
        <h2>{country.name}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {numberFormat(country.population)}</p>
      </div>
    </li>
  );
};

export default Card;
