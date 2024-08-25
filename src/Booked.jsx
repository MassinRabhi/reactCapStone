import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
const Validated = () => {
  return (
    <>
      <Nav />
      <>
        <article className="booking-wrapper">
          <div className="booking-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "10rem",
                height: "10rem",
                backgroundColor: "green",
                borderRadius: "20px",
                boxShadow: "0px 0px 75px 10px rgba(0,0,0,0.5)",
                color: "white",
                fontSize: "3rem", // Increase font size for larger tick icon
              }}
            >
              <i className="fas fa-check"></i>
            </div>
            <h1>Table Booked!</h1>
            <a href="/">
              <button>Go Back Home</button>
            </a>
          </div>
        </article>
      </>
      <Footer />
    </>
  );
};

export default Validated;
