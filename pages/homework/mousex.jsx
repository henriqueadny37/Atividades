import { useState } from "react"

export default function mousex(){
    const [X, setX] = useState(0)

    const arraY = useState(0)
    let Y = arraY[0]
    const alterarY = arraY[1]

    const mormai = {
        backgroundColor:"#560000",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        fontSize:"3rem",
        fontFamily:"monospace",
        justifyContent:"center",
    }

    function whereMove(ev){
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return(
        <div style={mormai} onMouseMove={whereMove}>
            <span>Eixo Horizontal: {X}</span>
            <span>Eixo Vertical: {Y}</span>
        </div>
    )
}