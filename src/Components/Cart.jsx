import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
      <button>Agregar al carrito</button>
        {console.log(cart)}
        {cart.map((menu, index) => <li key={index}>{menu.tipo} - cantidad: {menu.cantidad}</li>)}
    </div>
  )
}

export default Cart