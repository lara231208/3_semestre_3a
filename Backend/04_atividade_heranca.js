class Bruxo{
    nome
    nivelMagia
    constructor(nome, nivelMagia){
        this.nome = nome;
        this,nivelMagia = nivelMagia
    }

    apresentar(){
        return `Olá, eu sou ${this.nome}`
    }
}

class BruxoGrifinoria extends Bruxo{
    constructor(casa, feiticioAssinatura){
        super(nome) //inicializa o nome da classe pai
        this.casa = casa
        this.feiticioAssinatura = feiticioAssinatura
    }
}

class BruxoSonserina extends Bruxo{
    constructor(casa, feiticioAssinatura){
        super(nome)
        this.casa = casa
        this.feiticioAssinatura = feiticioAssinatura
    }
}

const ber = new BruxoGrifinoria("Bertuci", "Andradina", "10")
console.log(ber.apresentar());

const ber1 = new BruxoSonserina("Sesi-Andradina", "Castilho", "11")
console.log(apresentar());
