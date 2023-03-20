import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

function Header() {
  return (
      <nav>
        <Link to="/">
          <img src={Logo}></img>
        </Link>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
  )
}

export default Header