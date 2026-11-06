import React, { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Carts from './components/Carts'
import Kitchen from './components/Kitchen'
import Home from './components/Home'
import { useStore } from './storage'

const App = () => {
  const {cart} = useStore()
  const count = Object.values(cart).reduce((a,b)=>a+b,0)
  const [open, close] = useState(() => !sessionStorage.getItem('seen'))
  const [Started, setStarted] = useState(() => !!sessionStorage.getItem('seen'))
  return (
    <>
      {open && (
        <Home
          onStart={() => setStarted(true)}
          onSampat={() => {
            sessionStorage.setItem('seen', 1)
            close(false)
          }}
        />
      )}
      <header className='flex justify-between items-center p-5 navigation-tab'>
        <NavLink to="/" className='logo text-4xl font-semibold'>Cafe of Pixl</NavLink>
        <nav className='flex gap-6'>
          <NavLink to="/" className="nav-tab" end>Menu</NavLink>
          <NavLink to="/kitchen"className="nav-tab"  >Kitchen</NavLink>
          <NavLink to="/cart"className="nav-tab"  end>Cart {count > 0 && <span className='border-2 px-2 bg-[#de6408]'> {count}</span>}</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Menu className={Started ? 'menu-show' : 'menu-hide'} />} />
        <Route path='/kitchen' element={<Kitchen />} />
        <Route path='/cart' element={<Carts />} />
      </Routes>
    </>
  )
}

export default App