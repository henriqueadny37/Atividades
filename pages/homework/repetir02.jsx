import listaprod from "../../data/listaprod"

//essa aba puxa o arquivo listaprod da pasta data

export default function repetir02(){

const comBord = {
    border: "1px solid #ff0",
    borderRadius: "5px",
    textAlign: "center",
}



    function renderLista(){
        return listaprod.map(prod =>{
            return(
                <tr key={prod.id}>
                    <td style={comBord}>{prod.id}</td>
                    <td style={comBord}>{prod.nome}</td>
                    <td style={comBord}>{prod.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <table style={{
                border: "1px solid #fff",
                padding:"5px",
                borderRadius:"10px",
                width: "200px",
                height:"200px",
            }}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLista()}
                </tbody>
            </table>
        </div>
    )
}