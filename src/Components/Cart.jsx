import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
        {console.log(cart)}
        {cart.map(item => <li key={item.id}>{item.tipo}</li>)}
    </div>
  )
}

export default Cart