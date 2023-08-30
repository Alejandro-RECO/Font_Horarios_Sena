/* eslint-disable react/prop-types */
import { Iconos } from '../iconos/Iconos'
import './Search.css'

//Agregando commit de recuperacion

export const Search = ()=>{
    return(
        <div className="navLateral">
            <div className="links">
                <Buscadores elegido='fa-solid fa-house' nombre='HOME'/>
                <Buscadores elegido='fa-solid fa-magnifying-glass' nombre='SEARCH'/>
            </div>      
        </div>
    )
}

const Buscadores = (props) =>{
    return(
        <a href="#" className="link">
        <Iconos icono={props.elegido} />
        <span>{props.nombre}</span>
    </a>
    )
}
