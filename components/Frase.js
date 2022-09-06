
import Styles from "../styles/Frase.module.css"
import Image from "next/image"
import Foto from '../public/Programador1.png'

const Frase = () => {


  return (
    <div className = {Styles.contenedor}>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet" />

        <div>
          <h1 className = {Styles.texto}>
              {"<< Any sufficiently advanced technology is indistinguishable from magic. >>"}
          </h1>

          <p className = {Styles.parrafo}>
            Arthur C. Clarke
          </p>

        </div>
    </div>
  )
}

export default Frase
