

class Bruxo {
    constructor(nome, idade, nivelMagia, casa, matricula) {
        this.nome = nome
        this.idade = idade
        this.nivelMagia = nivelMagia
        this.casa = casa
        this.matricula = matricula
    }
}

const Hermione = new Bruxo("Hermione", 17, "Alto", "Grifinória", "HG1991")
console.log(Hermione.nome)
console.log(Hermione.idade)
console.log(Hermione.nivelMagia)
console.log(Hermione.casa)
console.log(Hermione.matricula)