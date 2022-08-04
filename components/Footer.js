
import Styles from '../styles/Footer.module.css'
import Link from 'next/dist/client/link'

const Footer = () => {
  return (
    <footer className = {Styles.contenido}>

      <div>
        <Link href = {"https://www.linkedin.com/in/adrian-dotel-pujols-192200208/"}>Linkedin</Link>
        <Link href = {"https://github.com/Adotel15"}>GitHub</Link>
      </div>
      
      <p>WhatsApp : +34 671 84 52 31</p>
      <p>Email: adriandotel@gmail.com</p>

    </footer>
  )
}

export default Footer
