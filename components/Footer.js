
import React from 'react'
import Styles from '../styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {

    return (
      <footer className = {Styles.contenido}>

        <div className = {Styles.datos}>
          <p> <FaWhatsapp /> +34 671 84 52 31</p>
          <p> <FiMail /> adriandotel@gmail.com</p>
        </div>

        <div className = {Styles.links}>
          
            
          <p>
            <a href = {"https://www.linkedin.com/in/adrian-dotel-pujols-192200208/"} target = "_blank" > <FaLinkedin/> </a>
          </p>
      
          <p>        
            <a href = {"https://github.com/Adotel15"} target = "_blank"><FaGithub /> </a>
          </p>
        
        </div>
        
        

      </footer>
    )
}

export default Footer


