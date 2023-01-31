export default function IcontadorLog(props){
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"100px",
            width:"100px",
            height:"100px",
            fontSize:"2rem",
            backgroundColor:"yellow",
            color:"#000",
            margin:"10px",
        }}>
            {props.numero}
        </div>
    )
}