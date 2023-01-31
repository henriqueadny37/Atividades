function acao(){
    console.log("acao")
}

export default function action(){
    function acao2(){
        console.log("acao2")
    }
    function acao5(e){
        console.log(e)
    }
    return(
        <div>
            <button onClick={acao}>Click</button>
         {/* primeira forma em função, observe que esta primeira função, está fora da função action */}
         <button onClick={acao2}>Click #02</button>
         {/* segunda forma em criar uma função inserindo uma função dentro de outra função */}
         <button onClick={function(){
            console.log("acao3")
         }}>Click #03</button>
         {/* terceira forma de criar uma função, dessa vez em js */}
         <button onClick={() => console.log("acao4")}>
            click #04
         </button>
         <button onClick={acao5}>Click #05</button>
         {/* outra função dentro de uma função */}
         <button onClick={e => acao5(e.altKey)}>
            V2 Click #05 
         </button>
         <input onChange={e => console.log(e.target.value)}>
         </input>
        </div>
    )
}