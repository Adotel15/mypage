
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Proyectos from '../components/Proyectos.js'
import Styles from '../styles/Home.module.css'
import AboutMe from '../components/AboutMe.js'
import Frase from '../components/Frase.js'
import CV from '../components/CV.js'

export default function Home() {

  return (

    <>
      <img src = 'Cielo.jpg' height = "800" width = "100%" className = {Styles.imagen}></img>
      
      <Header />

      <div className = {Styles.contenedor}>

        <Frase />
        
        <AboutMe />

        <CV />

        <h1 className = {Styles.titulo}>PERSONAL PORTFOLIO</h1>
        <Proyectos />

      </div>

      <h1 className = {Styles.contacto}>Want to Contact Me?</h1>
      <p className = {Styles.texto}>Here is my personal info: </p>

      <Footer />
    </>
  )
}
