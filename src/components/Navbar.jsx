import React from 'react'

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <a href="/">Cafe 0f Pixl</a>
      <nav>
        <a href="/menu">Menu</a>
        <a href="/carts">Carts</a>
        <a href="/kitchen">Kitchen</a>
      </nav>
    </div>
  )
}

export default Navbar