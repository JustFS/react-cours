import React from "react";

const Card = ({ country }) => {
  const transformNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <h3>{country.name}</h3>
      <img src={country.flag} alt={"drapeau de " + country.name} />
      <h4>{country.capital}</h4>
      <p>Pop : {transformNumber(country.population)}</p>
    </li>
  );
};

export default Card;
