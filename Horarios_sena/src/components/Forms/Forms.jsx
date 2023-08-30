import { Iconos } from "../iconos/Iconos"

export const Forms = () =>{
    return (
        <section className="form_section">
            <div className="form_header">
                <Iconos icono='fa-regular fa-user'/>
                <h1>INSTRUCTOR</h1>
            </div>

            <form action="POST">
                <label htmlFor="Nombre">Nombre</label>
                <input type="text" />
            </form>
            
        </section>
    )
}
