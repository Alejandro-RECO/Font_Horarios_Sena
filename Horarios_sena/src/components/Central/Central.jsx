/* eslint-disable react/prop-types */
import './Central.css'
import { Iconos } from '../iconos/Iconos'
import { dbNavLateral } from '../../bbdd/dbNAvLateral'
import { Products } from '../Productos/Products'
import { useState } from 'react'

 

export const Central = ()=>{

    const [mProducts, getProducts] = useState(false)

    const handelClick = ()=>{
        getProducts(!mProducts)
    }

    return(
        <div className="containerCentral">
            <Search placeholder='BUSCAR' mostrar={handelClick}/>
            { mProducts === true ? <Card info='INFO'/> : <Products />}
        </div>
    )
}

const Search = (props)=>{
    return(
        <div className="search-bacground">
            <div className="search">
                <div className="search-group">
                    <Iconos icono='fa-solid fa-magnifying-glass'/>
                    <input className='search-input' type="text"  placeholder={props.placeholder} />
                </div>
                <button onClick={props.mostrar}>
                    <Iconos icono='fa-solid fa-circle-plus'/>
                </button>
            </div>
        </div>


    )
}

const Card = (props)=>{
    return(
        <div className="cards">
            {dbNavLateral.map( cards =>(
                <div className="card" key={cards.id}>
                    <div className="card-top">
                        <Iconos icono={cards.logo} />
                        <h1 className='card-top_h1'>{cards.texto}</h1>
                    </div>
                    <div className="card-bottom">
                        <p>{props.info}</p>
                    </div>
                </div>
            ))}

        </div>


    )
}
