
import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Styles from '../styles/Tarjeta.module.css'

const Tarjeta = ({ page }) => {

    return (
        <div className = { Styles.main }>

            <div className = { Styles.contenedor_foto }>
                <img src = { page.foto } alt = {`Imagen pagina ${page.nombre}`} width = "100%" className = {Styles.foto} /> 
            </div>
           

            <h1 className = { Styles.nombre }> { page.nombre } </h1>

            <p className = { Styles.texto }> { page.texto } </p>
            <p className = { Styles.tech }> { page.tech } </p>

            <div className = { Styles.webs }>
                <a href = {page.url} className = { Styles.direccion } rel = "" target = "_blank" > <FaExternalLinkAlt/> View Page</a>
                <a href = {page.codigo} className = { Styles.direccion } rel = "" target = "_blank" > <FiGithub /> Check Code</a>
            </div>
        </div>
    )
}

export default Tarjeta
