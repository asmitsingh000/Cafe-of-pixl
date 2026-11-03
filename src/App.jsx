import React from 'react'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='home'>
      <header>
        <Navbar/>
      </header>
      <Menu/>
    </div>
  )
}

export default App