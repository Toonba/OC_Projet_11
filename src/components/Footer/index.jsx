import LogoWhite from '../../assets/Logo-white.png'
import '../../styles/footer.css'

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={LogoWhite} alt="logo footer" />
      <p className="footer-text">© 2020 Kasa. all rights reserved</p>
    </footer>
  )
}

export default Footer
