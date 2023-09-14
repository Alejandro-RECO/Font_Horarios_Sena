/* eslint-disable react/prop-types */
import './Central.css'
import { Iconos } from '../../iconos/Iconos'
import { Instructores } from '../ComponetesCentral/Instructores/Instructores'
import { Card } from '../Card/Card'
import { Products } from '../Productos/Products'

// Mapeo de componentes para renderizar, dependiendo del numero asignado mediente funcion ejecutada en NavLateral y NavSearch
const componentMap = {
    0: <Card info='INFO'/>, 
    1: <Instructores />,
    2: <Products />
}
 
// Componente de renderizaje de informacion principal del aplicativo
export const Central = ( {activeComponent})=>{
    
   return(
        <div className="containerCentral">
            <Search placeholder='BUSCAR'/>
            {/* Dependiendo de la eleccion del usuario de asigna un numero al componente y se renderiza partiendo de ello */}
            {componentMap[activeComponent]}    
        </div>

    )
}


// Componente Search de la parte superior del componente central 
const Search = (props)=>{
    return(
        <div className="search-bacground">
            <div className="search">
                <div className="search-group">
                    <Iconos icono='fa-solid fa-magnifying-glass'/>
                    <input className='search-input' type="text" placeholder={props.placeholder} />
                </div>
                <button onClick={props.mostrar}>
                    <Iconos icono='fa-solid fa-circle-plus'/>
                </button>
            </div>
        </div>


    )
}


