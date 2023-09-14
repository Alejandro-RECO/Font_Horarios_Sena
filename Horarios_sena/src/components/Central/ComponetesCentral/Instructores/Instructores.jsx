import { dbInstructores } from "../../../../bbdd/dbNAvLateral"
import { Target } from "../../../Targets/Target"

// Componente que mapea la base de datos y retorna renderizado de las inserciones en la base de datos
export const Instructores = () =>{
    return (

        <div className='targets'>
            {/* Mapeo base de datos de y renderizado de las mismas */}
            { dbInstructores.map(instructor => (
                <Target key={instructor.id} title={instructor.nombre} info={instructor.info} userName={instructor.userName}/>
            ))}
            
    </div>
    )
}