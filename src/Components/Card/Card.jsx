import React from 'react'
import cardStyle from './Card.module.css'

const Card = ({menu}) => {

  return (
    <div className={cardStyle.card} >
        <img className={cardStyle.cardImg} src={menu.img} alt="" />
        <h4>{menu.tipo}</h4>
        <h5>{menu.precio}</h5>
    </div>
  )
}

export default Card