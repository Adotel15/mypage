
import React from 'react'
import Styles from '../styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {

    return (


      <footer className = {Styles.fondo} >

        <h1 className = {Styles.contacto}>CONTACT ME</h1>
        <p className = {Styles.texto}>Here is my personal info: </p>

        <div className = {Styles.contenido}>

          

          <div className = {Styles.datos}>
            <p> <FaWhatsapp /> (+34) 671 84 52 31</p>
            <p> <FiMail /> adriandotel@gmail.com</p>
          </div>

          <div className = {Styles.links}>

            <p className = {Styles.texto}>Want to check out my Linkedin and Github?</p>
            
              
            <p>
              <a href = {"https://www.linkedin.com/in/adrian-dotel-pujols-192200208/"} target = "_blank" rel="noreferrer"> LinkedIn <FaLinkedin/> </a>
            </p>
        
            <p>        
              <a href = {"https://github.com/Adotel15"} target = "_blank" rel="noreferrer"> Github <FaGithub /> </a>
            </p>
          
          </div>
          
          <div>
            <p className = {Styles.texto}>My CV</p>
            <a>Link</a>
          </div>
          

        </div>
      </footer>
    )
}

export default Footer


