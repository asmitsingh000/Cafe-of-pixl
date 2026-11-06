import React, { useEffect, useState } from "react";
import { useStore } from "../storage";
import { Link } from "react-router-dom";

const NEXT = {
  new: ["preparing", "Start Cooking"],
  preparing: ["done", "Mark Done.."],
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
    orders.status === "done"
      ? ""
      : waited > VeryLate
        ? "very-late"
        : waited > Late
          ? "late"
          : "";

  return (
    <div className="ticket-wrap">
      <div
        className={`ticket t-${orders.status} ${urgency}`}
        style={{ "--tilt": `${((index * 37) % 7) - 3}deg` }}
      >
        <span className="pin" />
        <div className="t-hand flex items-baseline justify-between">
          <b className="text-2xl">#{orders.id}</b>
          <span>{orders.name || "-"}</span>
          </div>
        
        {orders.status !== 'done' && (
          <div className="timer mt-1 text-base">
            Waiting {asd(waited)}
          </div>
        )}
        <ul className=" my-3 border-y-2 border-dashed border-black/30 py-2 text-base ">
          {orders.items.map((it, i) => (
            <li key={i}>{it.qty}x {it.name}</li>
          ))}
        </ul>
        {next && (
          <button className="btn w-full" onClick={() => {
            setStatus(orders.id, next[0])
          }}>
            {next[1]}
          </button>
        )}
        {orders.status === 'done' && <div className="stamp">Done</div>}
      </div>
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
  const active = visible.filter((o) => o.status !== 'done')
  const finished = visible.filter((o) => o.status === 'done')

  const calculation = {}
  let earned = 0
  orders.forEach((o) => {
    o.items.forEach((it) => { calculation[it.name] = (calculation[it.name] || 0) + it.qty })
    if (o.status === 'done') o.items.forEach((it) => { earned += (it.price || 0) * it.qty })
  })

  const top = Object.entries(calculation).sort((a, b) => b[1] - a[1])[0]

  return (
    <div className="px-5 pb-16">
      <h2 className=" my-6 text-xl">Kitchen</h2>
      <div className="flex flex-wrap gap-4 ">
        <div className="stat"><span>orders </span><b> {orders.length}</b></div>
        <div className="stat"><span>Most ordersed</span><b>{top ? `${top[0]} (${top[1]})` : '-'}</b></div>
        <div className="stat"><span>Earned</span><b>Nrs.{earned.toFixed(2)}</b></div>
      </div>
      <div className="tickets mt-8">
        {active.length === 0 && (
          <p className="px-3">No orders yet. Place some orders from the <Link to="/" className="underline">menu</Link></p>
        )}
        {active.map((o, i) => <Ticket key={o.id} orders={o} index={i} now={now} />)}
      </div>
      {finished.length > 0 && (
        <>
          <div className="mt-12 flex items-center justify-between">
            <h3 className="text-base">Finished</h3>
            <button className="btn" onClick={clearDone}>Clear Finished</button>
          </div>
          <div className="tickets mt-4 ">
            {finished.map((o, i) =>
              <Ticket key={o.id} orders={o} index={i} now={now} />
            )}
          </div>
        </>
      )}
    </div>
  )
};

export default Kitchen;
