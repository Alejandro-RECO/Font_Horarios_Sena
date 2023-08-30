import { useState } from 'react'
import { Central } from '../Central/Central'
import { NavTop } from '../NavA/NavTop'
import { NavLateral } from '../NavLateral/NavLateral'
import { Search } from '../serch/Search'
import './NPI.css'



export const NavLeft = () =>{

    const [activeComponent, setActiveComponent] = useState(0);  


    const handleComponentClick = (componentId) => {
      setActiveComponent(componentId);
    };

    return(
        <div className="container">
            <div className="containerLateral">
            <Search handleComponentClick={handleComponentClick}/>
            <NavLateral handleComponentClick={handleComponentClick}/>
            </div>
            <div className="containerTop">
               <NavTop />
                <Central activeComponent={activeComponent} />
            </div>
        </div>
    )
}





