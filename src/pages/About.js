import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sed quas totam sunt sequi at voluptatibus maiores fuga. Cumque debitis saepe aspernatur odio repellat voluptas sapiente sunt explicabo quae in?"
  );
  const [editText, setEditText] = useState(false);

  return (
    <div className="about-container">
      <Logo />
      <Navigation />

      <h3>ABOUT</h3>

      {editText ? (
        <>
          <textarea
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
            cols="60"
            rows="3"
          ></textarea>
          <br />
          <button onClick={() => setEditText(false)}>Valider édition</button>
        </>
      ) : (
        <>
          <p>{text}</p>
          <button onClick={() => setEditText(true)}>Editer texte</button>
        </>
      )}
    </div>
  );
};

export default About;
