import React from 'react'

const Card = ({menu}) => {
  return (
    <div className='card' >
        <img className='card-img' src={menu.img} alt="" />
        <h4>{menu.tipo}</h4>
        <h5>{menu.precio}</h5>
    </div>
  )
}

export default Card