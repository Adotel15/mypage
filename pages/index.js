
import Header from '../components/Header.js'
import Frase from '../components/Frase.js'
import AboutMe from '../components/AboutMe.js'
import CV from '../components/CV.js'
import Proyectos from '../components/Proyectos.js'
import Footer from '../components/Footer.js'

import Styles from '../styles/Home.module.css'

import { useRef } from 'react'


export default function Home() {

    const refAboutMe = useRef(null);
    const refSkills = useRef(null);
    const refPortfolio = useRef(null);


    return (

    <>

      <div className = {Styles.pagina}>

        <div className = {Styles.video}>
          <video id = "backgroundVideo" preload = "auto" autoPlay = {true} playsInline = {true} loop = {true} muted = {true}>
            <source src = "Computadora.mp4" type="video/mp4" />
          </video>
        </div>
        
        <Header
            refAboutMe = { refAboutMe }
            refSkills = { refSkills }
            refPortfolio = { refPortfolio }
        />

        <div className = {Styles.contenedor}>

          <Frase />
          
          <div ref = { refAboutMe } >
            <AboutMe />
          </div>

          <div ref = { refSkills }>
            <CV />
          </div>

          <h1 ref = { refPortfolio } className = {Styles.titulo}>PERSONAL PORTFOLIO</h1>
          <Proyectos />

        </div>

        <Footer />
      </div>
    </>
    
    )
}
