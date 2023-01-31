function Gerarlista(final = 10){
    const lista = []
    
    for(let i = 1; i <= final; i++){
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function lista(){
   return(
    <div style={{
        margin:"30px",
        color:"yellow",
        fontSize:"20px",
    }}>
        <div>
            {Gerarlista(30)}
        </div>

        <div>
            {Gerarlista(20)}
        </div>

        <div>
            {Gerarlista(15)}
        </div>

    </div>
   )
}