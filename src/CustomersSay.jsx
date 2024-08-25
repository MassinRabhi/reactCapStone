import React from "react";
import avatar1 from "./Assets/avatar1.jpeg";
import avatar2 from "./Assets/Avatar2.jpeg";
import avatar3 from "./Assets/Avatar3.jpeg";

const CustomersSay = () => {
  return (
    <section className="testimonial-wrapper" id="tests">
      <div className="testimonial-background"></div>
      <div className="testimonial-container innerWidth">
        <div className="testimonial-heading">
          <h1>Testimonials</h1>
          <h2>What They Say</h2>
        </div>
        <div className="testimonial-cards">
          <div className="test-card">
            <div className="test-img-container">
              <img src={avatar1} alt="" />
            </div>
            <div className="test-comment">
              "Little Lemon is my favorite spot for Mediterranean cuisine. The
              lamb kebabs were tender and full of flavor. I'll be coming back
              often!"
            </div>
            <div className="test-name">Sophia Carter</div>
            <div className="card-rating">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="test-card">
            <div className="test-img-container">
              <img src={avatar2} alt="" />
            </div>
            <div className="test-comment">
              "The ambiance at Little Lemon is just right. The hummus and
              freshly baked pita were fantastic. A great place for a casual
              night out."
            </div>
            <div className="test-name">Liam Thompson</div>
            <div className="card-rating">⭐⭐⭐⭐</div>
          </div>

          <div className="test-card">
            <div className="test-img-container">
              <img src={avatar3} alt="" />
            </div>
            <div className="test-comment">
              "I had an amazing meal at Little Lemon. The seafood platter was
              fresh and delicious. The staff made the experience even better!"
            </div>
            <div className="test-name">Alexander Wright</div>
            <div className="card-rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
