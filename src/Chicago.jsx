import React from "react";
import food from "./Assets/food.jpg";
import food2 from "./Assets/food2.jpg";

const Chicago = () => {
  return (
    <article className="chicago-wrapper" id="story">
      <div className="chicago-container innerWidth">
        <div className="chicago-heading">
          <h1>Our Story</h1>
        </div>
        <div className="chicago-desc">
          Welcome to Little Lemon Restaurant, where we bring a slice of the
          Mediterranean to Chicago. Founded on a love for authentic
          Mediterranean cuisine, we combine time-honored recipes with a
          contemporary touch. Our dishes are crafted from the freshest
          ingredients, offering a blend of tradition and innovation. From savory
          kebabs to rich stews, each meal is made with care and passion.
          Experience the warmth of Mediterranean dining with us, where every
          visit is a celebration of good food and great company.
        </div>
        <div>
          <a href="/BookingPage">
            <button className="chicago-btn">BOOK A TABLE NOW</button>
          </a>
        </div>
        <div className="chicago-call">
          <h2>FREE CALL TO US</h2>
          <p>+213 123 456 789</p>
        </div>
      </div>
      <div className="food-back">
        <img src={food} alt="" />
      </div>
      <div className="food2-back">
        <img src={food2} alt="" />
      </div>
    </article>
  );
};

export default Chicago;
