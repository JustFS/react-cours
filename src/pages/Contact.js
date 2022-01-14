import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact-container">
      <Logo />
      <Navigation />

      <h1>Contact page</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Contact;
