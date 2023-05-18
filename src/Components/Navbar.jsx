import React from 'react'

const Navbar = () => {

    let titulos = ['Home', 'Contact', 'About', 'Pizzas']
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        {titulos.map((titulo, index) => (
            <div key={index} >
                <h4>{titulo}</h4>
            </div>
        ))}
    </div>
  )
}

export default Navbar