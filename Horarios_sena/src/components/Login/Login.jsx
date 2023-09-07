/* eslint-disable react/prop-types */
import { useState } from "react";
import { opciones } from "../../bbdd/dbNAvLateral";
import './Login.css'

export const Login = (props) => {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-header">
                    <h1 className="login-header__h1">INGRESO</h1>
                    <p className="login-header-p">Usuarios registrados</p>
                </div>
                <div className="login-body">
                    <ListaDesplegable />
                    
                    <label className="ligin-body__label" htmlFor="numDoc">Numero de documeto:</label>
                    <input className="ligin-body__input" type="text" id="numDoc" required placeholder="Ingrese numero de documento" />

                    <label className="ligin-body__label" htmlFor="password">Contraseña:</label>
                    <input className="ligin-body__input" type="password" id="password" required placeholder="Ingrese contraseña" />
                </div>
                <div className="login-footer">
                        <a className="login-footer__a">¿Olvide mi contraseña?</a>
                        <a className="login-footer__a">¿Su usuario esta bloqueado o inactivo?</a>
                        <button onClick={props.onClick} className="login-footer__button">INGRESAR</button>
                    </div>
            </div>
        </div>

    )
}



const ListaDesplegable = () => {


    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <label className="ligin-body__label" htmlFor="selectOptions">Tipo de documento de identidad</label>
            <select className="ligin-body__select" id="selectOptions" value={selectedOption} onChange={handleChange}>
                <option value="">Cédula de Ciudadanía</option>
                {opciones.map((opcion) => (
                    <option key={opcion.value} value={opcion.value}>
                        {opcion.label}
                    </option>
                ))}
            </select>
        </>
    );
};    
