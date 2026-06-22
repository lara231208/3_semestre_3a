import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
     <header className='navbar'>
      <div className='navbar-conteudo'>
        {/* Logo / Título */}
        <Link to='./' className='navbar-logo'> 📈 Renda Fixa </Link>

        {/* Links de navegação */}
        <div className='navbar-links'>
        <Link to='./' className='navbar-link'> 🧮 Calculadora</Link>
        <Link to='/sobre' className='navbar-link'> ℹ️ Sobre</Link>
      </div>
</div>
     </header>
  )
}

export default NavBar