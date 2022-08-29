
import Styles from '../styles/CV.module.css'
import Skills from '../helpers/Skills'
import Image from 'next/image'

const CV = () => {

    return (
        <div className = {Styles.contenedor}>
            <h1 className = {Styles.titulo}>
                SKILLS
            </h1>

            <div className = {Styles.skills}>
                {
                    Skills.map( skill => (
                        <>
                            <style jsx>
                                {`
                                    div:hover{
                                        border-color: ${skill.color};
                                        transition-duration: 0.5s;
                                        color: ${skill.color};
                                    }
                                `}
                                </style>
                            <div 
                                key = {skill.id}
                                className = {Styles.skill}
                            >
                                <div>
                                    <img
                                        width = "40"
                                        height = "40"
                                        alt = {`Logo ${skill.nombre}`}
                                        src = {skill.logo}

                                    />
                                    <h2>{skill.nombre}</h2>
                                </div>
                                <p>{skill.texto}</p>
                                <p>{skill.texto2}</p>
                                <p>{skill.texto3}</p>
                            </div>
                        </>
                        
                    ))
                }
            </div>

        </div>
    )
}

export default CV
