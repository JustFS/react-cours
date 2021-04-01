import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Logo />
      <Navigation />
      <h1>CONTACT</h1>
      <form action="">
        <input type="text" />
        <input type="date" />
        <input type="number" />
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default Contact;
