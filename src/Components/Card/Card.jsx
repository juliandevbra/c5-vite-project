import { useState } from 'react'
import cardStyle from './Card.module.css'

const Card = ({menu, setCart, cart}) => {

  const [counter, setCounter] = useState(0)
  // let contador = 0
  const {img, tipo, precio} = menu

  const sumar = () => {
    setCounter(counter+1)
  }
  
  const restar = () => {
    setCounter(counter-1)
  }


  return (
    <div className={cardStyle.card} >
        <img className={cardStyle.cardImg} src={img} alt="" />
        <h4>{tipo}</h4>
        <h5>{precio}</h5>
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button disabled={counter === 0} onClick={restar}>-</button>
          <h5 style={{margin: '10px'}}>{counter}</h5> 
          <button onClick={sumar}>+</button>
        </div>
        <button onClick={() => setCart([...cart, menu])}>Agregar al carrito 🛒</button>

        {/* Por que no usar variables comunes */}
        {/* <h5>{contador}</h5> <button onClick={() => {
          console.log(contador)
          contador = contador + 1
          }}>Sumar a la variable let</button>
        {console.log(contador)} */}
    </div>
  )
}

export default Card