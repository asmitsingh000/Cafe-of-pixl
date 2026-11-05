import React, { use, useState } from "react";
import { useStore } from "../storage";
import { menu } from "../data/Data";
import { Link } from "react-router-dom";

const Label = {
  new: "Order recieved",
  prepearing: "Cooking..",
  done: "Ready TA..DA..!",
};
const Carts = () => {
  const { cart, add, sub, remove, PlaceOrder, orders, setStatus } = useStore();
  const [name, setName] = useState("");
  const [placed, setPlaced] = useState(null);
  const rows = Object.entries(cart)
    .map(([id, qty]) => ({ ...menu.find((i) => i.id === id), qty }))
    .filter((l) => l.name);

  const total = rows.reduce((sum, l) => sum + l.price * l.qty, 0);
  const place = () => {
    const id = PlaceOrder(
      name.trim(),
      rows.map((l) => ({ name: l.name, qty: l.qty, price: l.price }))
    )
    setPlaced(id)
    setName('')
  };
  return(
    <div>
      <h2>Your Order </h2>
      {rows.length === 0 ? (<p>The Tray is Empty <Link to="/" >Open the menu</Link> and Pick-up Somthing.  :)</p> ) : (
        <>
        <ul className="rows">
          {rows.map((l) => (
            <li key={l.id}>
              <img src={l.img} alt={l.name} />
            </li>
          ))}
        </ul>
        </>
      )}
    </div>
  )
};

export default Carts;
