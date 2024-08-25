import React from "react";
import "./App.css";
import pasta from "./Assets/pasta.jpg";
import salade from "./Assets/salade.jpg";
import fetechini from "./Assets/fatacini.jpg";
const Specials = () => {
  return (
    <section className="specials-wrapper" id="specials">
      <div className="specials-container innerWidth">
        <div className="specials-heading">
          <h1>OUR SPECIALS</h1>
        </div>
        <div className="specials-cards">
          <div className="specials-top">Let's Enjoy Food</div>
          <p>
            indulge in a culinary adventure and savor every bite: Let's revel in
            the joy of good <br />
            food together!
          </p>
          <div className="box-cards">
            <div className="special-card">
              <div>
                <img src={pasta} alt="" />
                <div className="card-head">
                  <h1>Pasta</h1>
                  <p>18.15$</p>
                </div>
              </div>

              <div className="card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laudantium sequi eligendi id sed quos dicta aut repellendus?
                Molestias ea tempore porro earum nemo enim aut vitae
                necessitatibus nam laudantium.
              </div>

              <div className="card-order">
                <a href="">
                  <p>Order a delivery</p>
                  <span class="material-symbols-outlined">shopping_cart</span>
                </a>
              </div>
            </div>

            <div className="special-card">
              <div>
                <div>
                  <img src={salade} alt="" />
                  <div className="card-head">
                    <h1> Greek Salad</h1>
                    <p>18.15$</p>
                  </div>
                </div>
              </div>

              <div className="card-desc">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </div>
              <div className="card-order">
                <a href="">
                  <p>Order a delivery</p>
                  <span class="material-symbols-outlined">shopping_cart</span>
                </a>
              </div>
            </div>

            <div className="special-card">
              <div>
                <img src={fetechini} alt="" />
                <div className="card-head">
                  <h1>Brushetta</h1>
                  <p>18.15$</p>
                </div>
              </div>

              <div className="card-desc">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil. Toppings of
                tomato, veggies, beans, cured pork, or cheese are examples of
                variations. In Italy, a brustolina grill is frequently used to
                create bruschetta.
              </div>

              <div className="card-order">
                <a href="">
                  {" "}
                  <p>Order a delivery</p>
                  <span class="material-symbols-outlined">shopping_cart</span>
                </a>
              </div>
            </div>
          </div>

          <div className="specials-bottom">
            <button className="specials-btn">VIEW MENU</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
