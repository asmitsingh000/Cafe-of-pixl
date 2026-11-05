import React, { use, useState } from "react";
import { useStore } from "../storage";
import { menu } from "../data/Data";
import { Link } from "react-router-dom";

const Label = {
  new: "Order recieved",
  prepearing: "Cooking..",
  done: "Ready TA..DA..!",
};

const Colors = ["#fde68a", "#fbcfe8", "#bbf7d0", "#bfdbfe", "#fed7aa"];
const Tiles = [-3, 2, -2, 3];
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
      rows.map((l) => ({ name: l.name, qty: l.qty, price: l.price })),
    );
    setPlaced(id);
    setName("");
  };
  return (
    <div>
      <h2>Your Order </h2>
      {rows.length === 0 ? (
        <p>
          The Tray is Empty <Link to="/">Open the menu</Link> and Pick-up
          Somthing. :)
        </p>
      ) : (
        <>
          <ul className="rows">
            {rows.map((l) => (
              <li key={l.id}>
                <img src={l.img} alt={l.name} />
                <span>{l.name}</span>
                <button onClick={() => sub(l.id)}>-</button>
                <b>{l.qty}</b>
                <button onClick={() => add(l.id)}>+</button>
                <span>{(l.price * l.qty).toFixed(2)}</span>
                <button onClick={() => remove(l.id)}>remove</button>
              </li>
            ))}
          </ul>
          <div className="Total">Total: Nrs.{total.toFixed(2)}</div>
          <div className="lengthss">
            <input
              type="text"
              placeholder="Your tabel no."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn" onClick={place}>
              Place Order
            </button>
          </div>
        </>
      )}
      {placed && <p className="ye-le">Order #{placed} sent to the Kitchen</p>}
      {orders.length > 0 && (
        <>
          <h3>Your Orders</h3>
          <ul className="item-stauts">
            {[...orders].reverse().map((o) => (
              <li key={o.id}>
                <b>#{o.id} </b>
                {o.name}
                <span className={`pill ${o.status}`}> {Label[o.status]}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Carts;
