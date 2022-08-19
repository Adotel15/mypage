
import Styles from '../styles/CV.module.css'

const CV = () => {

    return (
        <div className = {Styles.contenedor}>
            <h1 className = {Styles.titulo}>
                SKILLS
            </h1>

            <div className = {Styles.skills}>
                <div>REACT</div>
                <div>NODE.JS</div>
                <div>SOLIDITY</div>
                <div>CSS</div>
                <div>HTML</div>
                <div>JAVASCRIPT</div>
                <div>NEXT.JS</div>
                <div>MONGODB</div>
                <div>GIT</div>
            </div>
        </div>
    )
}

export default CV
