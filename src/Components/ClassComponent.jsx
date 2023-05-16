import { Component } from 'react'

export default class ClassComponent extends Component {
    render(){
        console.log(this.props)
        let {texto, amount} = this.props 
        
        return(
            <>
                <h1>Este es un componente de {texto}</h1>
                {amount}
            </>
        )
    }
}
