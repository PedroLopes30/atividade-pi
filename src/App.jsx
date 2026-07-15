import { useState } from 'react'
import Perfil from './components/Perfil.jsx'
import Contador from './components/Contador.jsx'
import Interruptor from './components/Interruptor.jsx'

function App() {
  return (
    <div>
      <Perfil nome="Pedro" />
      <Perfil nome="Maria" />
      <Contador />
      <Interruptor />
    </div>
  )
}

export default App