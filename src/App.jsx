import React, { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Carts from './components/Carts'
import Kitchen from './components/Kitchen'
import Home from './components/Home'

const App = () => {
  const [cart, setCart] = useState([])
  const count = cart.length
  const [open, close] = useState(() =>
    !sessionStorage.getItem('seen'))
  return (
    <>
      {open && (
        <Home enter={() => {
          sessionStorage.setItem('seen', 1)
          close(false)
        }} />
      )}
      <header className='flex justify-between items-center p-5'>
        <NavLink to="/" className='logo'>Cafe of Pixl</NavLink>
        <nav className='flex gap-6'>
          <NavLink to="/" end>Menu</NavLink>
          <NavLink to="/kitchen" >Kitchen</NavLink>
          <NavLink to="/cart" end>Cart{count > 0 && <span className='badge'>{count}</span>}</NavLink>
        </nav>
      </header>
      <Routes>
        {/* <Route path='/' element={<Home/>}  /> */}
        <Route path='/' element={<Menu />} />
        <Route path='/kitchen' element={<Kitchen />} />
        <Route path='/cart' element={<Carts />} />
        {/* <Route path='/cart' element={<Carts cart={cart} setCart={setCart} />} /> */}
      </Routes>
    </>
  )
}

export default App