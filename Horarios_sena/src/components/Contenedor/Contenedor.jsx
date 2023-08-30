import { useState } from 'react'
import './Contenedor.css'
import { Central } from '../Central/Central/Central'
import { NavTop } from '../Navs/NavTop/NavTop'
import { NavLateral } from '../Navs/navLateral/NavLateral'
import { NavSearch } from '../Navs/NavSearch/NavSearch'



export const Contenedor = () =>{

    const [activeComponent, setActiveComponent] = useState(0);  


    const handleComponentClick = (componentId) => {
      setActiveComponent(componentId);
    };

    return(
        <div className="container">
            <div className="containerLateral">
                <NavSearch handleComponentClick={handleComponentClick}/>
                <NavLateral handleComponentClick={handleComponentClick}/>
            </div>
            <div className="containerTop">
                <NavTop />
                <Central activeComponent={activeComponent} />
            </div>
        </div>
    )
}





