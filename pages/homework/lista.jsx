export default function repetir(){
    const ListaAprovados = [
        'tomate',
        'cebola',
        'alface',
        'cuentro',
        'cenoura'
    ]

    function RenderLista(){
        return ListaAprovados.map(function(nome, i){
            return <li key={i}>{nome}</li>
        })
    }
    return(
        <ul>
            {RenderLista()}
        </ul>
    )
}