
import Styles from "../styles/Frase.module.css"
import Image from "next/image"
import Foto from '../public/Programador1.png'

const Frase = () => {


  return (
    <div className = {Styles.contenedor}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>

        <link href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap" rel="stylesheet"></link>

        <div>
          <h1 className = {Styles.texto}>
                  Take ideas that add value to people and make them come true through technology
          </h1>

        </div>
    </div>
  )
}

export default Frase
