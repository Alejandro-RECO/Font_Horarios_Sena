import { Iconos } from "../iconos/Iconos"
import { useForm } from 'react-hook-form';

export const Forms = () =>{
    const {register, handleSubmit} =useForm

    const onSubmit =(data)=>{
        console.log(data);
    }

    return (
        <section className="form_section">
            <div className="form_header">
                <Iconos icono='fa-regular fa-user'/>
                <h1>INSTRUCTOR</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="Nombre">Nombre</label>
                <input type="text" />
            </form>
            
        </section>
    )
}
