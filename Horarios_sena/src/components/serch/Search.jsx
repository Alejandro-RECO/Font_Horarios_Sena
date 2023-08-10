import './Search.css'

export const Search = ()=>{
    return(
        <div className="block1">
            <ul className="block1_ul">
                <CompLi  icono="fa-solid fa-house" nombre="HOME"/>
                <CompLi  icono="fa-solid fa-magnifying-glass" nombre="SEARCH"/>
            </ul>
        </div>
    )
}

const CompLi = (props)=>{
    return(
        <li className="block1_li">
            <a href="#" className="block1_a">
                <i className={props.icono}></i>
                {props.nombre}
            </a>
        </li>
    )
}
