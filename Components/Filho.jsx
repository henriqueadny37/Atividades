export default function Filho(props){
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            color:"green",
        }}>
            <h3>{props.nome}</h3>
            <h2>{props.comecs}</h2>
        </div>
    )
}