import React from "react";
import { Link } from "react-router-dom";

const Carts = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Your Orders</h2>
      <p>
        The tray is empty.<Link to="/">Open the menu</Link> And pickup
        somrthing.
      </p>
      <div>
        <ul>
          <li><img src="/photos/pizza.jpg" alt="" width= "48" height = "48" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Carts;
