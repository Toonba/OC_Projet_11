import { Link } from 'react-router-dom'
import React from 'react'
import '../../styles/header.css'
const Logo = require('../../assets/Logo.png') as string

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
