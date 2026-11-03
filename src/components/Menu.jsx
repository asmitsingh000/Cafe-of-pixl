import React from 'react'
import { menu } from '../data/Data';
const Menu = () => {
    return (
        <div className="menu flex flex-wrap gap-8 justify-center">
            {menu.map((item) => (
                <div key={item.id} className="card hover:cursor-pointer hover:translate-y-[-3px]">
                    <img src={item.image} alt={item.name} width="200" />
                    <div className="sub flex flex-col">
                        <p>{item.type}</p>
                        <h3>{item.name}</h3>
                        <p>Nrs.{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Menu