import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
        {console.log(cart)}
        {cart.map((item, index) => <li key={index}>{item.tipo}</li>)}
    </div>
  )
}

export default Cart