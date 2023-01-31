export default class prod {
    #id
    #nome
    #preco
    //clases ^

    constructor (id,nome,preco){
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }
    // construtores ^

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get preco(){
        return this.#preco
    }
    //atribuidores ^
}