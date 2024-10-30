import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Calculadora from './components/calculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <Calculadora/>
      <Rodape/>
    </>
  )
}

export default App
