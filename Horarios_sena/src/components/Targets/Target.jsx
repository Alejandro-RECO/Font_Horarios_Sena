/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import './Target.css'

export const Target = (props) =>{
    return(
        <div className="target">
            <div className="target-top">
                <img
                    className='top-img'
                    alt='El avatar de midudev'
                    src={`https://unavatar.io/${props.userName}`}
                />
                <h1 className='top-h1'>{props.title}</h1>
            </div>
            <div className="target-bottom">
                <div className="bottom-info">
                    <h2 className='bottom-h2'>INFORMACIÓN</h2>
                    <p className='bottom-p'>{props.info}</p>
                </div>
                <button className='bottom-button'>ACTUALIZAR</button>
            </div>
        </div>
    )
}