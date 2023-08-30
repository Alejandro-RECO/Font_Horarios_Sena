/* eslint-disable react/prop-types */

import { Iconos } from '../../iconos/Iconos'
import './NavLateral.css'

export const NavLateral = ({ handleComponentClick })=>{
    return(
        <div className="NavLateral">
            <div className="list-container">
                <ul className='list-ul'>    
                        <li className='list-li' onClick={()=>handleComponentClick(1)}>
                            <a href="#" className='list-a'>
                                <Iconos icono='fa-solid fa-user'/>
                                <span className='list-span'>INSTRUCTOR</span>
                            </a>
                        </li>
                        <li className='list-li' onClick={()=>handleComponentClick(2)}>
                            <a href="#" className='list-a'>
                                <Iconos icono='fa-solid fa-book'/>
                                <span className='list-span'>TEMATICA</span>
                            </a>
                        </li>
                        <li className='list-li' onClick={()=>handleComponentClick(3)}>
                            <a href="#" className='list-a'>
                                <Iconos icono='fa-solid fa-users'/>
                                <span className='list-span'>FICHA</span>
                            </a>
                        </li>
                        <li className='list-li' onClick={()=>handleComponentClick(4)}>
                            <a href="#" className='list-a'>
                                <Iconos icono='fa-solid fa-tv'/>
                                <span className='list-span'>PROGRAMA</span>
                            </a>
                        </li>
                        <li className='list-li' onClick={()=>handleComponentClick(5)}>
                            <a href="#" className='list-a'>
                                <Iconos icono='fa-solid fa-building'/>
                                <span className='list-span'>SEDE</span>
                            </a>
                        </li>
                        <li className='list-li' onClick={()=>handleComponentClick(5)}>
                            <a href="#" className='list-a'>
                                <Iconos icono='fa-solid fa-list-ol'/>
                                <span className='list-span'>TRIMESTRE  </span>
                            </a>
                        </li>
                        <li className='list-li' onClick={()=>handleComponentClick(6)}>
                            <a href="#" className='list-a'>
                                <Iconos icono='fa-solid fa-calendar-days'/>
                                <span className='list-span'>HORARIO  </span>
                            </a>
                        </li>
                </ul>
            </div>






            <div className="info-container">
                <div className="info-img">
                  <img src="./img/LSenaCompleto.png" alt="Logo Sena" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem praesentium enim aperiam ullam nulla blanditiis quibusdam corporis ex, ducimus quae quidem excepturi, quia, pariatur perspiciatis harum repellendus quam</p>
                <div className="info-links">
                    <a href="#">alguncorreo@gmail.com</a>
                    <a href="#">Directorio Sena</a>
                </div>

            </div>
        </div>
        
    )
}
