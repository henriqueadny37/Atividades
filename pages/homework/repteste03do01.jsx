export default function repeat(){
    const AprovadosNow = [
        "tu",
        "tozes",
        "tosse",
        "fulano",
        "cicrano"
    ]
// variavel acima
    function Ripado(){
        return AprovadosNow.map(function(nome, i){
            return <li key={i}>{nome}</li>
        })
    }
    // função acima
    return(
        <ul style={{
            listStyle:"none",
            color:"#ff0000",
            textAlign:"center",
            fontSize:"25px",
        }}>
            {Ripado()}
        </ul>
    )
}