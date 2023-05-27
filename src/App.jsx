import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Form from './Components/Form'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Pastas from './Components/Pastas'

function App() {

  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar/>
      <Home setCart={setCart}/>
      {/* <Pastas setCart={setCart}/> */}
      <Cart cart={cart}/>
      <Form/>
    </>
  )
}

export default App
