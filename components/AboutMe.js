
import Styles from "../styles/AboutMe.module.css"

const AboutMe = () => {
  return (
    <div className = {Styles.contenedor}>
        <div className = {Styles.contenido}>
            <div className = {Styles.titulo}>
                Hello, it's me 
                <p><span>Adrian.</span></p>
            </div>
            <p className = {Styles.texto}>
                I am a FullStack Web3 developer, specialized in React and Solidity, really passionate about the Blockchain ecosystem and all the 
                opportunities and technologies it offers. In the mood for contribute and improve in my carreer in this environment. If you are 
                looking for a committed, ambitious and proactive developer, I am your guy.
            </p>
        </div>
        <div>
            <img src = "pagina.jpg" alt="Foto mia" width="450" height="300" className = {Styles.imagen}></img>
        </div>
    </div>
  )
}

export default AboutMe
