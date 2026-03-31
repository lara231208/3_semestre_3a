import { Link } from 'react-router-dom'
import jogo from '../assets/jogo.png'


function Inicio() {
    // Cole o link da imagem abaixo entre as aspas, ex: 'https://site.com/imagem.png'
    const imageUrl = 'https://img.freepik.com/vetores-premium/placa-seja-bem-vido_359875-219.jpg?semt=ais_hybrid&w=740&q=80'
    const src = imageUrl || jogo

    return (
        <div>
            <h1>Bem-vindo, Deus Abençoe!</h1>
            <img src={src} alt="Jogo" style={{ width: 200, display: 'block', marginTop: 12, marginBottom: 16 }} />
            <Link to='/detalhes'>Página Detalhes</Link>
        </div>
    )
}

export default Inicio