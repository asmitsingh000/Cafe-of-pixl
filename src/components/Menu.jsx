import { useRef, useState, useEffect } from "react";
import { CATEGORIZE, menu } from "../data/Data";
import { useStore } from "../storage";
const Menu = ({ className }) => {
  const [active, setActive] = useState("all");
  const items =
    active === "all" ? menu : menu.filter((i) => i.category === active);
  const special = menu[new Date().getDay() % menu.length];
  const rowRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  // const showAlert = () => {
  //   alert("Item added to cart")
  // }

  const checkScroll = () => {
    const el = rowRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const t = setTimeout(checkScroll,300);
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollRow = (dir) =>
    rowRef.current.scrollBy({ left: dir * 250, behavior: "smooth" });

  const { add } = useStore()
  return (
    <div className={className}>
      <div className="relative px-3 py-3 sm:px-5 sm:py-4">
        {canLeft && (
          <button
            onClick={() => scrollRow(-1)}
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center  border bg-amber-500 text-black shadow sm:h-9 sm:w-9"
          >
            ←
          </button>
        )}
        <div
          ref={rowRef}
          onScroll={checkScroll}
          className="no-scrollbar flex gap-2 overflow-x-auto sm:gap-3"
        >
          <button
            onClick={() => setActive("all")}
            className={`cursor-pointer whitespace-nowrap rounded-full border px-3 py-1.5 transition sm:px-4 sm:py-2 sm:text-base ${active === "all" ? "bg-black text-white" : "bg-transparent"
              }`}
          >
            All
          </button>
          {CATEGORIZE.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              style={{ "--c": c.color }}
              className={`cursor-pointer whitespace-nowrap rounded-full border border-[var(--c)] px-4 py-2 transition sm:px-4 sm:py-2 sm:text-base ${active === c.id ? "bg-[var(--c)] text-white" : "bg-transparent"
                }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        {canRight && (
          <button
            onClick={() => scrollRow(1)}
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center  border bg-amber-500 text-black shadow sm:h-9 sm:w-9"
          >
            →
          </button>
        )}
      </div>

      <div className=" grid grid-cols-1 items-start gap-4 p-3 sm:p-5 lg:grid-cols-[208px_1fr] lg:gap-6">
        <aside className="sp-card rounded-xl border sm:p-4 p-3 text-center lg:sticky lg:top-4">
          <span className="text-sm font-bold sm:text-base">Today's Special</span>
          <img
            src={special.img}
            alt={special.name}
            className="mx-auto mt-3 aspect-square w-32 rounded-lg object-contain sm:w-40 lg:w-full"
          />
          <h3 className="mt-3 break-words text-sm font-semibold sm:text-lg">{special.name}</h3>
          <p className="mb-3">{special.price}/-</p>
          <button onClick={() => {add(special.id)}} className="cursor-pointer border rounded-sm py-1 px-3 text-sm sm:text-base" >
            Add to Carts
          </button>
        </aside>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:gap-4">
          {items.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              style={{ "--i": i }}
              className="cards overflow-hidden rounded-xl border"
            >
              <img
                src={item.img}
                alt={item.name}
                className="aspect-square w-full object-contain"
              />
              <div className="flex flex-col gap-1 p-2 sm:gap-2 sm:p-3">
                <h3 className="break-words text-xs font-semibold leading-snug sm:text-base">{item.name}</h3>
                <span className="text-xs opacity-70 sm:text-sm">
                  {CATEGORIZE.find((c) => c.id === item.category)?.name}
                </span>
                <p>Nrs.{item.price}/-</p>
                <button onClick={() => add(item.id)} className="cursor-pointer rounded-sm border px-2 py-1 text-sm sm:text-base sm:px-3" >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="section">
    //     <div className={className}>
    //         <div className="grids">
    //             {menu.map((item, i) => (
    //                 <div className='cards' key={item.id} style={{'--i':i}}>
    //                     <img src={item.image} alt={item.name} />
    //                     <div className="cards-body">
    //                         <div className="cards-head">
    //                             <h3 className='name'>{item.name}</h3>
    //                               <span className='type'>{item.type}</span>
    //                             <p className='paisa'>{item.price}/-</p>
    //                         </div>
    //                         <button className='cursor-pointer border p-0 m-0 rounded-sm w-23'>Add to cart</button>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // </div>
    // see there is a triangle how those div are aligned hahahahahah
  );
};

export default Menu;
