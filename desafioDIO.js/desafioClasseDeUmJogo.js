class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let guerreiro = new heroi("Ícarus", 35,"Guerreiro","espada")
let mago = new heroi("Aurelius", 60, "mago", "magia")
let monge = new heroi("Benkei",70, "monge", "artes marciais")
let ninja = new heroi("Jiraiya", 40, "ninja", "shuriken")

guerreiro.atacar()