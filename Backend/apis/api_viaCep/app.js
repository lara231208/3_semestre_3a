import express from 'express';

const app = express();

app.get('/', async(req, res) =>{
  res.status(200)
})

//criando um  novo endpoint para consumir dados da Api ViaCep
app.get('/cep/:codigo', async(req, res) =>{
    const codigo = req.params.codigo;
    //o metodo fetch é o menssageiro que vai até a outra Api e trás a resposta
    const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`)
    const dados = await resposta.json();

    res.status(201).json(dados);
})


const porta = 3000;
app.listen(porta, () =>{
    console.log(`http://localhost:${porta}`)
})