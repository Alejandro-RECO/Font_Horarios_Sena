
import { Iconos } from '../../iconos/Iconos'
import './NavTop.css'

export const NavTop = ()=>{
    return(
        <div className="navSuperior">
            <div className="navSuperior-container">
                <div className="container_img">
                    <a href="#">
                        <img className='container-img' src="./img/LSena.png" alt="Logo Sena" />
                    </a>
                </div>
                <div className="container-star">
                    <a href="#">
                        <Iconos icono='fa-regular fa-user' />
                    </a>
                    <a href="#">
                        <Iconos icono='fa-solid fa-arrow-right-from-bracket' />
                    </a>
                </div>
            </div>
        </div>
    )
}