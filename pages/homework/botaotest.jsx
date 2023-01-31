function reel(){
    console.log("reel")
}

export default function reel(){

    function reel2(){
        console.log("reel2")
    }

    function acao5(e){
        console.log(e)
    }

    return(
        <div>
            <button onClick={reel}>Acessar</button>
            <button onClick={reel2}>Acessar #02</button>
            <button onClick={function(){
                console.log("reel33")
            }}>Acessar #03</button>
            <button onClick={() => console.log("reel4")}>
                Acessar #04
            </button>
            <button onClick={e => acao5(e.altKey)}>
                Acessar v2
            </button>
            <input onChange={e => console.log(e.target.value)}>

            </input>
        </div>
    )
}