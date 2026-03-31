import { Link, useParams } from 'react-router-dom'


function Perfil() {
    const { nome } = useParams()
    return (
        <div>
            <h1>Este é o Perfil de {nome}</h1>
            <Link to='/'>Voltar para Página Principal</Link>
        </div>
    )
}

export default Perfil