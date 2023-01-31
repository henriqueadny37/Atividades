import { useState } from "react"

export default function Formu(){
    const [Valor, setValors] = useState(undefined)

    function Alterar(){
        setValors(Valor + "!")
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            padding:"20px",
        }}>
            <input type="text" value={Valor}
            onChange={e => setValors(e.target.value) } />
            <button onClick={Alterar}>Acessar</button>
        </div>
    )
}