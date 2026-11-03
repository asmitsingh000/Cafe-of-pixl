import React, { useState } from 'react'
import { NavLink, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu'
import Carts from './components/Carts'
import Kitchen from './components/Kitchen'

const App = () => {
  const [cart, setCart] = useState([])
  const count = cart.length
  return (
    <>
      <header>
        <NavLink to="/" className='logo'>Cafe of Pixl</NavLink>
        <nav>
          <NavLink to="/" end>Menu</NavLink>
          <NavLink to="/kitchen" >Kitchen</NavLink>
          <NavLink to="/cart" end>Cart{count > 0 && <span className='badge'>{count}</span>}</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Menu cart={cart} setCart={setCart}/>} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/cart' element={<Carts cart={cart} setCart={setCart} />} />
        </Routes>
      </main>
    </>
  )
}

export default App