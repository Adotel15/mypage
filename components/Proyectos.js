
import { PAGES } from "../helpers/Paginas"
import Styles from "../styles/Proyectos.module.css"
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

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
                    <a href = {paginas.url} target = "_blank" > <FaExternalLinkAlt /> View App </a>
                    <a href = {paginas.codigo} target= "_blank"> <FiGithub /> Check Code </a>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default Proyectos
