import React, { useEffect, useState } from "react";
import { useStore } from "../storage";
import { Link } from "react-router-dom";

const NEXT = {
  new: ["preparing", "Start Cooking"],
  preparing: ["Done", "Mark Done.."],
};

const Late = 2 * 60 * 1000;
const VeryLate = 5 * 60 * 1000;

const asd = (ms) => {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`;
};

function Ticket({ orders, index, now }) {
  const { setStatus } = useStore();
  const next = NEXT[orders.status];
  const waited = now - orders.time;
  const urgency =
    orders.status === "Done"
      ? ""
      : waited > VeryLate
        ? "very-late"
        : waited > Late
          ? "late"
          : "";

  return (
    <div
      className={`ticket t-${orders.status} $orders{urgency}`}
      style={{ "--tilt": `${((index * 37) % 7) - 3}deg` }}
    >
      <span className="pin" />
      <div className="t-hand">orders #{orders.id}</div>
      <div className="t-name">{orders.name}</div>
      {orders.status !== 'Done' && <div className="timer">Waiting {asd(waited)}</div>}
      <ul>
        {orders.items.map((it, i) => (
          <li>{it.qty}x {it.name}</li>
        ))}
      </ul>
      {next && (
        <button className="btn" onClick={() => {
          setStatus(orders.id, next[0])}}>
          {next[1]}
        </button>
      )}
      {orders.status === 'Done' && <div className="stamp">Done</div>}
    </div>
  );
}
const Kitchen = () => {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const { orders, clearDone } = useStore()
  const visible = orders.filter((o) => !o.hidden)
  const active = visible.filter((o) => o.status !== 'Done')
  const Done = visible.filter((o) => o.status === 'Done')

  const calculation = {}
  let earned = 0
  orders.forEach((o) => {
    o.items.forEach((it) => { calculation[it.name] = (calculation[it.name] || 0) + it.qty })
    if (o.status === 'Done') o.items.forEach((it) => { earned += (it.price || 0) * it.qty })
  })

  const top = Object.entries(calculation).sort((a, b) => b[1] - a[1])[0]

  return (
    <div>
      <h2>Kitchen</h2>
      <div className="stats">
        <div className="stat"><span>orders</span><b>{orders.length}</b></div>
        <div className="stat"><span>Most ordersed</span><b>{top ? `${top[0]} (${top[1]})` : '-'}</b></div>
        <div className="stat"><span>Earned</span><b>${earned.toFixed(2)}</b></div>
      </div>
      <div className="rail" />
      <div className="tickets">
        {active.length === 0 && (
          <p>No orders yet. Place some orders from the <Link to="/">menu</Link></p>
        )}
        {active.map((o, i) => <Ticket key={o.id} orders={o} index={i} now={now} />)}
      </div>
      {Done.length >0 && (
        <>
        <div className="row between">
          <h3>Finished</h3>
          <button className="btn" onClick={clearDone}>Clear Finished</button>
        </div>
        <div className="tickets">
          {Done.map((o,i)=> 
          <Ticket key={o.id} orders={o} index={i} now={now} />
          )}
        </div>
        </>
      )}
    </div>
  )
};

export default Kitchen;
