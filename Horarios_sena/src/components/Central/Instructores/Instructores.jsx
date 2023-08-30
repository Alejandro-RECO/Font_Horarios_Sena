import { dbInstructores } from "../../../bbdd/dbNAvLateral"
import { Target } from "../../Targets/Target"


export const Instructores = () =>{
    return (
        <div className='targets'>
            {dbInstructores.map(instructor => (
                <Target key={instructor.id} title={instructor.nombre} info={instructor.info} userName={instructor.userName}/>
            ))}
    </div>
    )
}