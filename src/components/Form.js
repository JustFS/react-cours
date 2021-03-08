import React, { useState } from "react";

const Form = () => {
  let maVariable = "coucou";
  const [name, setName] = useState("coucou");

  return (
    <form>
      <input type="text" placeholder="nom" />
      <input type="text" placeholder="prenom" />
      {name}
    </form>
  );
};

export default Form;
