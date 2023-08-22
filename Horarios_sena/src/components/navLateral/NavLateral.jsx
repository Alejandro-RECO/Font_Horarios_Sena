
import { Iconos } from '../iconos/Iconos'
import './NavLateral.css'
import { dbNavLateral } from '../../bbdd/dbNAvLateral'

export const NavLateral = ()=>{
    return(
        <div className="NavLateral">
            <div className="list-container">
                <ul className='list-ul'>
                { dbNavLateral.map( lista =>(
                        <li className='list-li' key={lista.id}>
                            <a href="#" className='list-a'>
                                <Iconos icono={lista.logo}/>
                                <span className='list-span'>{lista.texto}</span>
                            </a>
                        </li>
                    ))
                }
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
