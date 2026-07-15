import { useState } from 'react'

function Contador () {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
        }    
    
    return (
        <div>
            <button onClick={incrementar}>O contador é: {contador}</button>
        </div>
    )
}    

export default Contador