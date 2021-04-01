import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  const [textEdit, setTextEdit] = useState(false);
  const [text, setText] = useState("Coucou les amis");

  return (
    <div className="about">
      <Logo />
      <Navigation />
      <h1>A PROPOS</h1>
      <button onClick={() => setTextEdit(!textEdit)}>Editer</button>

      {textEdit ? (
        <>
          <textarea
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
            cols="40"
            rows="10"
          ></textarea>
          <button onClick={() => setTextEdit(false)}>
            Valider modification
          </button>
        </>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default About;
