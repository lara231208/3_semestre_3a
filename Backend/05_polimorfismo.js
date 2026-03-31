class Pessoa{
    nome
    constructor(nome){
        this.nome = nome;
    }

    apresentar(){
        return `Olá, eu sou ${this.nome}`
    }
}

class PessoaFisica extends Pessoa{
    constructor(nome, cpf){
        super(nome) //inicializa o nome da classe pai
        this.cpf = cpf
    }

    //sobrescritor(polimorfismo)
    apresentar(){
        return `Pessoa Fisica ${this.nome} | CPF: ${this.cpf}`
    }
}

class PessoaJuridica extends Pessoa{
    constructor(nome, cnpj){
        super(nome)
        this.cnpj = cnpj
    }
}

const ber = new PessoaFisica("Bertuci", "123.456.789.-0")
console.log(ber.apresentar());

const sesi = new PessoaJuridica("Sesi-Andradina", "12,34,56/0001-90")
console.log(apresentar());
