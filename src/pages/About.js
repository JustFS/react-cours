import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Logo />
      <Navigation />
      <h1>A PROPOS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum modi
        earum, corrupti numquam necessitatibus quae reiciendis rerum suscipit
        veritatis dolorum minima, facere id?
      </p>
    </div>
  );
};

export default About;
