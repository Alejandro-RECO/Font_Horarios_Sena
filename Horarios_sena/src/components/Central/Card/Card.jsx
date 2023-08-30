/* eslint-disable react/prop-types */


// Archivo JSON dbNavLateral
import { dbNavLateral } from "../../../bbdd/dbNAvLateral"
import { Iconos } from "../../iconos/Iconos"


// Componente de renderizado de tagetas principales unidas a un archivo JSON
export const Card = (props)=>{
    return(
        <div className="cards">
            
            {/* Mapeo de archivo JSON */}
            {dbNavLateral.map( cards =>(
                <div className="card" key={cards.id}>
                    <div className="card-top">
                        <Iconos icono={cards.logo} />
                        <h1 className='card-top_h1'>{cards.texto}</h1>
                    </div>
                    <div className="card-bottom">
                        <p>{props.info}</p>
                    </div>
                </div>
            ))}

        </div>


    )
}