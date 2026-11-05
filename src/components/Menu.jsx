import { useState } from 'react';
import { CATEGORIZE, menu } from '../data/Data';
const Menu = ({ className }) => {
    const [active, setActive] = useState('all')
    const items = active === 'all' ? menu : menu.filter(i => i.category === active)
    const special = menu[new Date().getDay() % menu.length]
    return (

        <div className={className}>
            <div>
                <button onClick={() => setActive('all')}
                    className={`cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 transition ${active === 'all' ? 'bg-black text-white' : 'bg-transparent'
                        }`}>
                    All
                </button>
                {CATEGORIZE.map(c => (
                    <button key={c.id} onClick={() => setActive(c.id)} style={{ '--c': c.color }}
                        className={`cursor-pointer whitespace-nowrap rounded-full border border-[var(--c)] px-4 py-2 transition ${active === c.id ? 'bg-[var(--c)] text-white' : 'bg-transparent'
                            }`}>
                        {c.name}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 items-start gap-6 p-5 lg:grid-cols-[208px_1fr]'>
                <aside className='rounded-xl border p-4 text-center lg:sticky lg:top-4'>
                    <span className='font-bold'>Today's Special</span>
                    <img src={special.img} alt="{special.name}" className='mt-3 aspect-square w-full rounded-lg object-cover' />
                    <h3>{special.name}</h3>
                    <p>{special.price}</p>
                    <button>
                        Add to Carts
                    </button>
                </aside>

                <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
                    {items.map((item, i) => (
                        <div
                            key={`${item.id}-${i}`}
                            style={{ '--i': i }}
                            className="cards overflow-hidden rounded-xl border">
                            <img src={item.img} alt={item.name} className="aspect-square w-full object-cover"/>
                            <div className="flex flex-col gap-2 p-3">
                                <h3 className="font-semibold">{item.name}</h3>
                                <span className="text-sm opacity-70">
                                    {CATEGORIZE.find(c => c.id === item.category)?.name}
                                </span>
                                <p>{item.price}/-</p>
                                <button className="cursor-pointer rounded-sm border px-3 py-1">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

        // <div className="section">
        //     <div className={className}>
        //         <div className="grids">
        //             {menu.map((item, i) => (
        //                 <div className='cards' key={item.id} style={{'--i':i}}>
        //                     <img src={item.image} alt={item.name} />
        //                     <div className="cards-body">
        //                         <div className="cards-head">
        //                             <h3 className='name'>{item.name}</h3>
        //                             <span className='type'>{item.type}</span>
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
    )
}

export default Menu