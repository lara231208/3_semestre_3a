class ranking {
  

   constructor(id, nome, pontuacao){
       this.id = id;
       this.nome = nome;
       this.pontuacao = pontuacao;
   }

   resumo(){
      return `${this.nome} - ${this.pontuacao}`
   }

   nivelranking(){
      if(this.pontuacao <= 150) return 'Iniciante';
      if(this.pontuacao <= 300) return 'Intermediário';
      return `Avançado`
   }

   aumentarpontuacao(){
   this.pontuacao = this.pontuacao + 10;
   }
}

export default ranking;

