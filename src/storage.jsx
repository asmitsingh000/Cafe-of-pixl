import { createContext, useContext, useState } from "react";

const StoreContext = createContext()
export const useStore = () => useContext(StoreContext);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState({});
  const [orders, setOrder] = useState([]);
  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const sub = (id) =>
    setCart((c) => {
      const n = (c[id] || 0) - 1;
      const next = { ...c };
      if (n <= 0) delete next[id];
      else next[id] = n;
      return next;
    });

  const remove = (id) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });

  const PlaceOrder = (name, items) => {
    const id = orders.length + 1;
    setOrder((o) => [...o, { id, name, items, status: "new" }]);
    setCart({});
    return id;
  };
  const setStatus = (id,status) =>
    setOrder(o=>o.map(x=>(x.id === id ? {...x,status}:x)))

  return(
    <StoreContext.Provider value={{cart,add, sub , remove, PlaceOrder, orders, setStatus}}>
        {children}
    </StoreContext.Provider>
  )
}
