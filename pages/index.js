
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Proyectos from '../components/Proyectos.js'
import Styles from '../styles/Home.module.css'
import AboutMe from '../components/AboutMe.js'
import Frase from '../components/Frase.js'
import CV from '../components/CV.js'

export default function Home() {

  return (

    
    <div className = {Styles.pagina}>


      <div className = {Styles.video}>
        <video id = "backgroundVideo" preload = "true" autoPlay = {true} loop = {true} muted = {true}>
          <source src = "Computadora.mp4" type="video/mp4" />
        </video>
      </div>
      
      <Header />

      <div className = {Styles.contenedor}>

        <Frase />
        
        <AboutMe />

        <CV />

        <h1 className = {Styles.titulo}>PERSONAL PORTFOLIO</h1>
        <Proyectos />

      </div>

      <Footer />
    </div>
  
  )
}
