
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Proyectos from '../components/Proyectos.js'
import Styles from '../styles/Home.module.css'
import AboutMe from '../components/AboutMe.js'

export default function Home() {

  return (

    <>
      <Header />

      <div className = {Styles.contenedor}>
        <AboutMe />

        <h1 className = {Styles.titulo}>Personal Portfolio</h1>
        <Proyectos />

      </div>

      <Footer />
    </>
  )
}
