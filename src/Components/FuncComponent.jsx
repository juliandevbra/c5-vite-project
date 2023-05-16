const FuncComponent = ({texto, amount}) => {
    console.log(texto, amount)

    return(
        <>
            <h1>Este es el componente de {texto}</h1>
            {amount*6}
        </>
    )
}

export default FuncComponent