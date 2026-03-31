let produto = {
    'nome':'iphone',
    'modelo': '17',
    'preco': '10000',
    'memoria': 256
}

console.log(produto.preco);

let aluno = {
    "nome": "Lara",
    "idade": 17,
    "turma": "3º A",
    "mae" : {
        "nome": "Renata",
        "telefone" : "18 929292929"
    }
}
console.log (`${aluno.nome}`); //lara
console.log (`${aluno.mae.nome}`);//renata

//desfrutando um objeto 
let nomeAluno = aluno.nome;
//let idade = aluno.idade;
//let turma = aluno.turma;
//let mae = aluno.mae;
let { idade, turma, mae} = aluno;