import { useState } from 'react'
import { estilos } from './Game.Estilos'

const Game = () => {
    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero)
    const [chute, setChute] = useState('')
    const [mensagem, setMensagem] = useState('Adivinhe um número entre 1 e 100')
    const [tentativas, setTentativas] = useState(1)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

    function botaoNovoJogo () {
        setNumeroSecreto(sortearNumero)
        setChute('')
        setMensagem('Adivinhe um número entre 1 e 100')
        setTentativas(1)
        setJogoFinalizado(false)
    }

    function sortearNumero () {
        return Math.floor(Math.random() * 100) + 1
    }

    function botaoChutar(){
        if ( numeroSecreto == chute) {
            setMensagem(`✅ ACERTOUU! Você descobriu em ${tentativas} tentativas`)
            setJogoFinalizado(true)
        } else if (numeroSecreto > chute) {
            setMensagem (`Você chutou ${chute}. O nº secreto é maior`)
            setTentativas(tentativas + 1)
            setChute('')
        } else {
            setMensagem (`Você chutou ${chute}. O nº secreto é menor`)
            setTentativas(tentativas + 1)
            setChute('')
        }
    }


    return (
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo Número Secreto</h1>
                        <p style={estilos.mensagem}>{mensagem} </p>
                    </div>
                    <input type="Number" style={estilos.chute} onChange={(event) => setChute(event.target.value)} value={chute} />
                    <div style={estilos.botoes}>
                        <button style={estilos.botao} onClick={botaoChutar}>Chutar</button>
                        <button style={estilos.botao} onClick={botaoNovoJogo}>Novo Jogo</button>
                    </div>

                </div>
                <img src="./img/IA.png" style={estilos.imagem} ></img>
            </div>
           
        </section>
    )
}

export default Game