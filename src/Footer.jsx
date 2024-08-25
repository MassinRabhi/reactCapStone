import React from "react";
import logo from "./Assets/little-logo.png";

const Footer = () => {
  return (
    <article className="footer-wrapper">
      <div className="footer-container innerWidth">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-location">
          <h1>Our Location</h1>
          <p>
            1700 W Chicago Ave, <br /> Chicago, IL 60622 <br /> +213 123 456 789
          </p>
          <div className="maps">
            <span class="material-symbols-outlined">distance</span>
            <p>Chicago</p>
          </div>
        </div>
        <div className="footer-links">
          <h1>Quick Links</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#hero">About</a>
            </li>
            <li>
              <a href="/#specials">Menu</a>
            </li>
            <li>
              <a href="/BookingPage">Reservations</a>
            </li>
            <li>
              <a href="/#hero">Order</a>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <h1>Social Media</h1>
          <div className="soc">
            <span class="fab fa-facebook-f"></span>
            <span class="fab fa-instagram"></span>
            <span class="fab fa-pinterest-p"></span>
            <span class="fab fa-snapchat-ghost"></span>
            <span class="fab fa-tiktok"></span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Footer;
