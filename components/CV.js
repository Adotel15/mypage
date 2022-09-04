
import Styles from '../styles/CV.module.css'
import Skills from '../helpers/Skills'
import { useEffect } from 'react'
import { Fragment } from 'react'

const CV = () => {

    return (
        <div className = {Styles.contenedor}>
            <h1 className = {Styles.titulo}>
                SKILLS
            </h1>

            <div className = {Styles.skills}>
                {
                    Skills.map( skill => (
                        <Fragment
                            key = {skill.id}
                        >
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
                        </Fragment>
                        
                    ))
                }
            </div>

        </div>
    )
}

export default CV
