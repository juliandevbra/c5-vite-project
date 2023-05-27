import React from 'react'
import { pastas } from '../menues'
import Card from './Card/Card'
const Pastas = ({setCart}) => {
  return (
    <div>
        {pastas.map(pasta => <Card setCart={setCart} menu={pasta}/>)}
    </div>
  )
}

export default Pastas