import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(nombre.length > 3 && direccion.length > 6) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >Nombre: </label>
            <input type="text" disabled={show} onChange={(event) => setNombre(event.target.value)} />
            <label >Direccion: </label>
            <input type="text" disabled={show} onChange={(event) => setDireccion(event.target.value)}/>
            <button>Mandar pizza</button>
            {error && 'Verifique bien su información'}
        </form>

        {show ? 
            <>
                <h3>Muchas gracias, {nombre}!</h3>
                <h3>Estamos enviando la pizza a {direccion}.</h3>
            </>
            :
            null
        }

        {/* {Condicion ? Resultado true : Resultado false} */}
        {/* {Condicion && Resultado true} */}
    </div>
  )
}

export default Form