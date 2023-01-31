function mega(qtde = 6, numeros = []){
    // (qtde = 6) o número 6 significa um número por padrão
    if(qtde < 6 && qtde > 6){
        throw "Número inválido"
    }
    // primeira condição de parada acima
// condição de parada é quando eu vou parar de executar para retornar o valor
    if(numeros.length == qtde){
        return numeros.sort((n1, n2) => n1- n2)
        // A quantidade array tem que ser igual a quantidade de numeros que voce quer gerar
        // A segunda condição de parada, é verificar a quantidade de numeros do array,
        // se é exatamente igual a quantidade de elementos
    }
    // segunda condição de parada acima
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    // acima para gerar numeros inteiros
        if(numeros.includes(numeroAleatorio)){
            return mega(qtde,[...numeros, numeroAleatorio])
             // caso a checagem acima  não seja bem sucedida, no caso um numero aleatorio gerado pertence a um array
            // de números
        }else{
            return mega(qtde, numeros)
            // aqui ele irá gerar a mesma quantidade de numeros novamente
                // (qtde, numeros) < aqui está passando a mesma quantidade de números para ele gerar novamente
        }
                            // [...numeros] < essa é uma forma de clonar array 
    // se o numero aleatorio nao estiver não pertencer a lista de numeros, significa que eu posso adicionar +1 numero aleatorio
        
}
console.log(mega(7))
// chamada do resultado da função, acima
