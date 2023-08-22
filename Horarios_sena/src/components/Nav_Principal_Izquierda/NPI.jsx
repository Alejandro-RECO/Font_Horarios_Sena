import { Central } from '../Central/Central'
import { NavTop } from '../NavA/NavTop'
import { NavLateral } from '../navLateral/NavLateral'
import { Search } from '../serch/Search'
import './NPI.css'



export const NavLeft = () =>{
    return(
        <div className="container">
            <div className="containerLateral">
            <Search />
            <NavLateral />
            </div>
            <div className="containerTop">
               <NavTop />
                <Central />
            </div>
        </div>
    )
}





