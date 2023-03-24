import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import '../../styles/header.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" className="logo"></img>
      </Link>
      <nav>
        <Link to="/" className="header-link">
          Accueil
        </Link>
        <Link to="/about" className="header-link">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
