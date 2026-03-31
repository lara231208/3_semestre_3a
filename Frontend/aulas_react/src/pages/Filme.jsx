import { Link, useParams } from 'react-router-dom'


function Filme() {
    const { id } = useParams()
    return (
        <div>
            <h1>Exibindo dados do Filme {id}</h1>
            <Link to='/'>Este é o Filme</Link>
        </div>
    )
}

export default Filme