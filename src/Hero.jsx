import React from "react";
import "./App.css";
const Header = () => {
  return (
    <section className="hero-wrapper" id="hero">
      <div className="hero-container innerWidth">
        <div className="hero-heading">
          <h1>
            Little Lemon
            <br />
            <span>Chicago</span>
          </h1>
        </div>
        <div className="hero-desc">
          <p>
            We are a family-owned Mediterranean restaurant, specializing in
            traditional recipes with a<br /> modern twist to offer a unique and
            memorable dining experience.
          </p>
        </div>
        <div>
          <a href="/BookingPage">
            <button className="hero-btn">BOOK A TABLE</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
