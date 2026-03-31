import ranking from '../models/ranking.js'

let listaranking = [
    new ranking(1, 'Lara', 350,),
    new ranking(2, 'Rafael', 130,),
    new ranking(3, 'Barreto', 120,),
    new ranking(4, 'Bertuci', 0,),
    new ranking(5, 'Pietra', 360,)
]

const rankingController = {
    listar: (req, res) => {
        res.render('ranking.ejs', { ranking: listaranking })
    },
    adicionar: (req, res) => {
        const nome = req.body.nome
        const pontuacao = req.body.pontuacao

        const novoranking = new ranking(
            listaranking.length + 1,
            nome,
            Number(pontuacao)
        )
        listaranking.push(novoranking);
        res.redirect('/ranking')
     }
        
    }

    
    

export default rankingController;