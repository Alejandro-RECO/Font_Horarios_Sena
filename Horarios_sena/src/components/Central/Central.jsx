/* eslint-disable react/prop-types */
import './Central.css'
import { Iconos } from '../iconos/Iconos'
import { Instructores } from './Instructores/Instructores'
import { Card } from './Card/Card'


const componentMap = {
    0: <Card info='INFO'/>, 
    1: <Instructores />
}
 

export const Central = ( {activeComponent})=>{
    
   return(
        <div className="containerCentral">
            <Search placeholder='BUSCAR'/>
            {componentMap[activeComponent]}    
        </div>

    )
}

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


