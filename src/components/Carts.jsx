import React, { use, useState } from "react";
import { useStore } from "../storage";
import { menu } from "../data/Data";
import { Link } from "react-router-dom";

const Label = {
  new: "Order recieved",
  preparing: "Cooking..",
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
    <div className="mx-auto max-w-4xl px-3 pb-16 sm:pb-5 ">
      <h2 className="my-6 text-base sm:text-xl">Your Order </h2>
      {rows.length === 0 ? (
        <p>
          The Tray is Empty <Link to="/" className="underline">Open the menu</Link> and Pick-up
          Somthing. :)
        </p>
      ) : (
        <>
          <ul className="rows">
            {rows.map((l) => (
              <li
                key={l.id}
                className="flex felx-wrap items-center gap-x-3 gap-y-2 border-b-2 border-dashed border-black/20 py-3"
              >
                <img
                  src={l.img}
                  alt={l.name}
                  className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                />
                <span className="flex-1 min-w-0 basis-32">{l.name}</span>
                <div className="flex w-full items-center gap-2 sm:w-auto gap-3">
                  <button
                    onClick={() => sub(l.id)}
                    className="h-8 w-8 cursor-pointer rounded border-2"
                  >
                    -
                  </button>
                  <b className="w-6 text-center">{l.qty}</b>
                  <button
                    onClick={() => add(l.id)}
                    className="h-8 w-8 cursor-pointer  rounded border-2"
                  >
                    +
                  </button>
                  <span className="flex-1 text-right sm:w-20 sm:flex-none">
                    {(l.price * l.qty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => remove(l.id)}
                    className="cursor-pointer rounded border-2 px-2 text-sm"
                  >
                    remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="Total mt-4 text-right text-xl sm:text-2xl">
            Total: Nrs.{total.toFixed(2)}
          </div>
          <div className="lengthss mt-4 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your tabel no."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 rounded border-2 bg-transparent px-3 py-2 outline-none"
            />
            <button
              className="cursor-pointer rounded border-2 bg-[var(--welcome)] px-5 py-2"
              onClick={place}
            >
              Place Order
            </button>
          </div>
        </>
      )}
      {placed && (
        <p className="ye-le mt-4">Order #{placed} sent to the <Link to="/kitchen"> Kitchen</Link></p>
      )}
      {orders.length > 0 && (
        <>
          <h3 className="mt-12 text-sm sm:text-base">Your Orders</h3>
          <div className="rope">
            <Link to="/kitchen" className="contents">
              {[...orders].reverse().map((o) => (
                <div className="note-wrap" key={o.id}>
                  <div
                    className="note"
                    style={{
                      "--bg": Colors[o.id % Colors.length],
                      "--r": `${Tiles[o.id % Tiles.length]}deg`,
                    }}
                  >
                    <span className="pin" />
                    <div className="flex items-baseline justify-between">
                      <b className="text-2xl">#{o.id} </b>
                      <span className="text-base">{o.name || "-"}</span>
                    </div>
                    <ul className="my-3 border-y-2 border-dashed border-black/30 py-2 text-base ">
                      {o.items.map((it, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span>
                            {it.qty}x {it.name}
                          </span>
                          <span>{it.price * it.qty}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span>
                        {o.items.reduce((s, it) => s + it.price * it.qty, 0)}/-
                      </span>
                      <span className={`pill ${o.status}`}>{Label[o.status]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Carts;
