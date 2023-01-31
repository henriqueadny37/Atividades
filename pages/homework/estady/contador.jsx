import { useState } from "react";
import IcontadorLog from "../../direito/IcontadorLog";

export default function contar(){
    const [numero, setNumero] = useState(0)

    function inc(){
        setNumero(numero + 1)
    }

    function dec(){
        setNumero(numero - 1)
    }

    const voog = {
        flexDirection:"column",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    }

    const very = {
        cursor:"pointer",
        padding:"10px",
    }

    return(
        <div style={voog}>
            <h1>Contador</h1>
                <IcontadorLog numero={numero} />
           <div>
                <button style={very} onClick={inc}>+</button>
                <button style={very} onClick={dec}>-</button>
           </div>
        </div>
    )   
}