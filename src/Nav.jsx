import React, { useState, useEffect } from "react";
import logo from "./Assets/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg";
import "./App.css";

const Nav = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [glassEffect, setGlassEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);

      // Get the Hero section element
      const heroElement = document.querySelector(".hero-wrapper");
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        // Apply glass effect if the Hero section is out of view
        setGlassEffect(heroRect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`innerWidth ${scrollingUp ? "nav-show" : "nav-hide"}`}>
      <div className="left-nav">
        <img src={logo} alt="Logo" />
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
            <a href="/">Order</a>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <button className="login-btn">LOGIN</button>
      </div>
    </nav>
  );
};

export default Nav;
