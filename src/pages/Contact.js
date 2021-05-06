import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <Logo />
      <h1>Contact</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default Contact;
