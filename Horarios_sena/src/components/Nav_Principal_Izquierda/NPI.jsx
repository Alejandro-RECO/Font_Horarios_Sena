import './NPI.css'
import { Search } from '../serch/search'
import { NavA } from '../NavA/NavA'


export const NavLeft = () =>{
    return(
        <div className="grid-container">
            <Search />
            <NavA />
        </div>
    )
}





