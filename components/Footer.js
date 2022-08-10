
import Styles from '../styles/Footer.module.css'
import Link from 'next/dist/client/link'

const Footer = () => {
  return (
    <footer className = {Styles.contenido}>

      <div className = {Styles.datos}>
        <p>WhatsApp : +34 671 84 52 31</p>
        <p>Email: adriandotel@gmail.com</p>
      </div>

      <div className = {Styles.links}>
        <p>
          <a href = {"https://www.linkedin.com/in/adrian-dotel-pujols-192200208/"} target = "_blank">Linkedin</a>
        </p>
        <p>
          <a href = {"https://github.com/Adotel15"} target = "_blank">GitHub</a>
        </p>
      </div>
      
      

    </footer>
  )
}

export default Footer
