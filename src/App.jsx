import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Form from './Components/Form'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar/>
      <Home cart={cart} setCart={setCart}/>
      <Cart cart={cart}/>
      <Form/>
    </>
  )
}

export default App
