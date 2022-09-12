
import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'


const Slider = ({ pagina, isNext }) => {

    const { nombre, url, codigo, texto, tech, foto } = pagina;
    
    return (

        <>
            <div className = { `contenedorFoto  ${isNext ? 'next' : 'notNext' }`}>
                    <img width = "100%" height = "200px" alt = {`Foto ${nombre}`} className = 'foto' src = {foto}/>
            </div>
            <div className = 'contenedor'>

                
                <h1 className = 'negrita'> { nombre } </h1>

                <div>
                    <p> { texto } </p>
                    <p className = 'negrita tech'> { tech } </p>
                </div>

                <div className = 'enlaces negrita'>
                    <a href = { url } target = "_blank" rel = "noreferrer" > <FaExternalLinkAlt/> View App </a>
                    <a href = { codigo } target = "_blank" rel = "noreferrer" > <FiGithub /> Check Code </a>
                </div>
            
            </div>
        </>
    )
}

export default Slider
