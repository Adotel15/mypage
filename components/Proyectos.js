
import { PAGES } from "../helpers/Paginas"
import Styles from "../styles/Proyectos.module.css"
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Proyectos = () => {


  return (
    <div className = {Styles.contenedor} >
      {
        PAGES.map(paginas => (
            <div 
              className = {Styles.etiqueta}
              key = {paginas.id}
            >
                <h1>{paginas.nombre}</h1>
                <div className = {Styles.enlaces}> 
                    <a href = {paginas.url} target = "_blank" rel="noreferrer"> <FaExternalLinkAlt /> View App </a>
                    <a href = {paginas.codigo} target= "_blank" rel="noreferrer"> <FiGithub /> Check Code </a>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default Proyectos
