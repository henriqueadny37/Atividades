import { Component } from "react";
import Contadorpage from "../../Components/Contador";

export default class contador extends Component{
    render(){
        return(
            <>
            <Contadorpage valorInicial={100}  passo={1}/>
            </>
        )
    }
}