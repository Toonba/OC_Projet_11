import '../../styles/footer.css'
import React from 'react'
const LogoWhite = require('../../assets/Logo-white.png') as string

const Footer: React.FC = () => {
  return (
    <footer>
      <img className="footer-logo" src={LogoWhite} alt="logo footer" />
      <p className="footer-text">© 2020 Kasa. all rights reserved</p>
    </footer>
  )
}

export default Footer
