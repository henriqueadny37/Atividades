export default function repetindo(){
    const ListaAprovados = [
        'Hugo',
        'Cater',
        'Vick',
        'Ferg',
        'Chula'
    ]

    function RenderLista(){

        return ListaAprovados.map(function(nome, i){
            return <li key={i}>{nome}</li>
        })
    }
    return (
        <ul>
            {RenderLista()}
        </ul>
    )
}




// export default function repetir(){
//     const ListaAprovados =[
//       'Gui',
//       'Karla',
//       'Vanish',
//       'Welmann',
//       'Vick',
//       'Andressa'  
    //   ] 
  
    //   function RenderLista(){ 
          
        //   return ListaAprovados.map(function(nome, i){ 
            //   return <li key={i}>{nome}</li> 
        //   }) 
    //   } 
    //   return( 
        //   <ul>{RenderLista}</ul>
    //   ) 
//    }  