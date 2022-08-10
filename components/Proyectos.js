
import { PAGES } from "../helpers/Paginas"
import Styles from "../styles/Proyectos.module.css"

const Proyectos = () => {

  return (
    <div className = {Styles.contenedor}>
      {
        PAGES.map(paginas => (
            <div className = {Styles.etiqueta}>
                <h1>{paginas.nombre}</h1>
                <div className = {Styles.enlaces}> 
                    <a href = {paginas.url} target = "_blank" >Access Page</a>
                    <a href = {paginas.codigo} target= "_blank">GitHub Code</a>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default Proyectos
