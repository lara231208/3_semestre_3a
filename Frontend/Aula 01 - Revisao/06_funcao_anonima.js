//função nomeada

function saudacao(nome) {
    console.log (`Tenha um bom dia ${nome}`);
}
//chamando a função nomeada
saudacao('Lara');

//função anonima
const saudacao2 = function (nome) {
    console.log (`Tenha um bom dia ${nome}`);
}
saudacao2('Lara');



//crie uma função nomeada de  somar 2 numeros 

function adicao (n1, n2) {
    return n1 + n2;
}

//transfomar ela em anonima

const adicao2 = function (n1, n2) {
   return n1 + n2;
}
