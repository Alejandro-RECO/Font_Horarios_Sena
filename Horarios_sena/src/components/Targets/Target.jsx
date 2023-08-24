/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import './Target.css'

export const Target = (props) =>{
    return(
        <div className="target">
            <div className="target-top">
                <h1>Precio: {props.title}</h1>
            </div>
            <div className="target-bottom">
                <p className='bottom-p'>Cantidad: {props.info}</p>
                <button className='bottom-button'>ACTUALIZAR</button>
            </div>
        </div>
    )
}