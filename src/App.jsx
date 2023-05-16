import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {


  return (
    <>
      <ClassComponent texto='Clase n° 1' amount={100000}/>
      
      <FuncComponent texto='Función n° 1' amount={150000}/>

      <FuncComponent texto='Función n° 2' amount={300000}/>
    </>
  )
}

export default App
