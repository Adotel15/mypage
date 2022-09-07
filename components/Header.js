
import Styles from '../styles/Header.module.css'

const Header = () => {

  const handleScroll = movimiento => {
    window.scrollTo ({ top: movimiento, behavior : 'smooth'})
  }

    return (
      <header className = {Styles.contenido}>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&display=swap" rel="stylesheet"/>

          <div className = {Styles.cabeza}>

            <p className = {Styles.firma}>Adrian Dotel Pujols</p>

            <div className = {Styles.navegacion}>
              
              <div>
                <a onClick={ () => handleScroll(1200) }> About Me </a>
              </div>
              
              <div>
                <a onClick={ () => handleScroll(2200) }> Skills </a>
              </div>

              <div>
                <a onClick={ () => handleScroll(3750) }> Personal Portfolio </a>     
              </div>
              
              <div>
                <a onClick={ () => handleScroll(5000) }> Contact </a>
              </div>

            </div>
          </div>
      </header>
    )
}

export default Header
