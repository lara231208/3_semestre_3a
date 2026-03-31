import { use } from "react"
import { estilos } from "../style/Estilos"
import { Link, useNavigate } from "react-router-dom"

const Aula14 = () => {
    const navigate = useNavigate()
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
            <hr />
            <h3>Navegação com Link</h3>
            {/* <a href='/'>Página Principal </a> */ } 
            <Link to='/'>Página Principal</Link>
            <br />
            <Link to='/sobre'>Página Sobre</Link>
            <br />
            <Link to='/blablabla'>Página Não encontrada</Link>
            <br />
            <hr />
            <h3>Exercícios 😘👌</h3>
            <Link to='/inicio'>Página de Início </Link>
            <br />
            <Link to='/detalhes'>Página de Detalhes </Link>
            <br />
            <Link to='/contato'>Página de Contatos </Link>
            <br />
            <Link to='/filme/10'>Página do Filme 10 </Link>

            <hr />
            <h3>Utilizando com programação utilizando o useNavigate</h3>
            <button onClick={ () => navigate('sobre') }> Sobre </button>
            <hr />

            <h3>Rotas dinâmicas / Rotas em Parâmetros (useParams)</h3>
                        <button onClick={ () => navigate('/perfil/Lara') }>Perfil da Lara </button>
                        <button onClick={ () => navigate('/perfil/Rafael') }>Perfil do Rafael </button>
                        <hr />
                        <h3>Exercicios😘👌</h3>
                        <button onClick={ () => navigate('/inicio') }>Página de Início </button>
                        <button onClick={ () => navigate('/detalhes') }>Página de Detalhes </button>
                        <button onClick={ () => navigate('/contatos') }>Página de Contatos </button>
                        <button onClick={ () => navigate('/filme/10') }>Página do Filme 10 </button>


        </div>
    )
}

export default Aula14