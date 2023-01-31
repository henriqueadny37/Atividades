import Titu from "../../Components/Tiitulo";

export default function Ustitulo(){

    return(
        <div style={{
            border:"1px solid white",
            width:"30vw",
            color:"yellow",
            margin:"8%",
            fontFamily:"Arial"
        }}>
            <Titu
                primeiro = "Seu Cadastro"
                secundario =  "Sua Senha"
                pequeno = {true}
            />

            <Titu
                primeiro  = "Crie seu login"
                secundario = "Digite seu email"
            />

            <Titu
                primeiro = "Salve seus dados"
                secundario = "Salve aqui"
            />

        </div>
    )
}