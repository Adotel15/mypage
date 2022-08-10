
import Styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className = {Styles.contenido}>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&display=swap" rel="stylesheet"/>

        <div className = {Styles.cabeza}>
          <p className = {Styles.firma}>Adrian Dotel Pujols</p>

          <div className = {Styles.navegacion}>
            <p>
              <a>About Me</a>
            </p>
            <p>
              <a>Personal Portfolio</a>
            </p>
            <p>
              <a>Contact</a>
            </p>
          </div>
        </div>
    </header>
  )
}

export default Header
