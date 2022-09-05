
import Styles from "../styles/AboutMe.module.css"


const AboutMe = () => {

  return (
    <div className = {Styles.contenedor}>

        <div className = {Styles.contenido}>
            <div className = {Styles.titulo}>
                {"Hello, I'm"}
                <p><span>Adrian.</span></p>
            </div>
            <p className = {Styles.texto}>
               {" I'm a Frontend Developer, specialized in React, really hungry to keep evolving my skills and my carrer as a developer in this field, also to keep improving and learning new skills! Really familiar working with technologies like Node.js,  MongoDB, Next.js, and all kind of CSS frameworks like TailwindCSS, SASS, Styled Components, MUI and Native CSS. If you are looking for a passionate, commited, ambitious and proactive developer for your team, I'm your guy!"}
            </p>
        </div>

        <div>
            <a href = "https://www.linkedin.com/in/adrian-dotel-pujols/" target = "_blank" rel="noreferrer">
                <img src = "pagina.jpg" alt="Picture of myself" width="450" height="300" className = {Styles.imagen} />
            </a>
                
        </div>

    </div>
  )
}

export default AboutMe
