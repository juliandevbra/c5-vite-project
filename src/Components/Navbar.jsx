import React from 'react'

const Navbar = () => {

    let titulos = ['Home', 'Contact', 'About', 'Pizzas']

    const navbarStyle = {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-around',
      backgroundColor: 'grey',
      boxShadow: '3px 5px 8px #000',
      borderRadius: '10px'
    }

  return (
    <div style={navbarStyle} >
        {titulos.map((titulo, index) => (
            <div key={index}>
                <h4>{titulo}</h4>
            </div>
        ))}
    </div>
  )
}

export default Navbar