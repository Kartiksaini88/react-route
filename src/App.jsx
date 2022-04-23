import { useState } from 'react'
import logo from './logo.svg'

import { Home } from './components/home'
import { Nav } from './components/nav'
import { Men } from './components/mens'
import { Route, Routes } from 'react-router-dom'
import { Women } from './components/women'
import { Homedetail } from './components/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/:id' element={<Homedetail/>}></Route>
      </Routes>
    </div>
  )
}

export default App
