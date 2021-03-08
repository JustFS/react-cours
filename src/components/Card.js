import React from "react";

const Card = ({ country }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <h4>{country.name}</h4>
      <h5>{country.capital}</h5>
      <p>Pop : {formatNumber(country.population)}</p>
      <div className="img">
        <img src={country.flag} alt={country.name} />
      </div>
    </li>
  );
};

export default Card;
