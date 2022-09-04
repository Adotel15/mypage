
import React, { Fragment } from 'react'
import Styles from '../styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {

    return (


      <div className = {Styles.fondo} >

        <h1 className = {Styles.contacto}>Want to Contact Me?</h1>
        <p className = {Styles.texto}>Here is my personal info: </p>

        <footer className = {Styles.contenido}>

          

          <div className = {Styles.datos}>
            <p> <FaWhatsapp /> +34 671 84 52 31</p>
            <p> <FiMail /> adriandotel@gmail.com</p>
          </div>

          <div className = {Styles.links}>

            <p className = {Styles.texto}>Want to check out my Linkedin and Github?</p>
            
              
            <p>
              <a href = {"https://www.linkedin.com/in/adrian-dotel-pujols-192200208/"} target = "_blank" > Linkedin <FaLinkedin/> </a>
            </p>
        
            <p>        
              <a href = {"https://github.com/Adotel15"} target = "_blank"> Github <FaGithub /> </a>
            </p>
          
          </div>
          
          <div>
            <p className = {Styles.texto}>My CV</p>

            <a>Link</a>
          </div>
          

        </footer>
      </div>
    )
}

export default Footer


