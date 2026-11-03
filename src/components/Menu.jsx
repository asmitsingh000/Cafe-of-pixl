import React from 'react'
import { menu } from '../data/Data';
import "./styling/menu.css"
const Menu = () => {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.image} alt={item.name} width="200" />
                    <div className="sub">
                        <h3>{item.name}</h3>
                        <p>Nrs.{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Menu