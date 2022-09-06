
import { PAGES } from "../helpers/Paginas"
import Styles from "../styles/Proyectos.module.css"
import HorizontalScroll from 'react-scroll-horizontal'
import Tarjeta from "../components/Tarjeta.js"

const Proyectos = () => {


  return (
    <div className = { Styles.scroll }>
      <div className = { Styles.slider }>
        <HorizontalScroll
          reverseScroll = { true }
          config        = {{ stiffness: 200, damping: 100}}
        >
          {
            PAGES.map ( page => (

                <Tarjeta 
                  key = { page.id }
                  page = { page }
                />
            ))
          }
        </HorizontalScroll>
      </div>
    </div>
  )
}

export default Proyectos
