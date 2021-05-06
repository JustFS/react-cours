import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  const [text, setText] = useState("Voici un texte super top");
  const [editText, setEditText] = useState(false);

  return (
    <div className="about">
      <Navigation />
      <Logo />
      <h1>ABOUT</h1>

      {editText ? (
        <input
          defaultValue={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <h2>{text}</h2>
      )}

      <br />
      <button onClick={() => setEditText(!editText)}>Editer / Valider</button>
    </div>
  );
};

export default About;
