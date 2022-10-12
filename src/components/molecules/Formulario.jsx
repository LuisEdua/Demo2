import B1 from '../atoms/buttons/B1'
import P1 from '../atoms/ps/Text'
import I1 from '../atoms/inputs/i1'
import {useState} from 'react'

function formulario(){
    const [count, setCount] = useState(0);

    const handleFocus = () => {
        console.log('Evento focus')
    }

    const handleBlur = (event) => {
        console.log(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
    }

    return (
        <form onSubmit={handleSubmit}>
            <P1 id={"UsserP"} value={"Nombre de usuario"} />
            <I1 id={"usserName"} type={"Text"} placeholder={"Usuario"} className={"LoginI"} value={usserName} onFocus={handleFocus} onBlur={handleBlur} />
            <P1 id={"PasswordP"} value={"Password"} />
            <I1 id={"password"} type={"Password"} placeholder={"Password"} className={"LoginI"} value={password}/>
            <br />
            <center><B1 id={"LB1"} value={"Iniciar Sesion"} onClick={()=> setCount(count+1)}/></center>
        </form>
    )
}
export default formulario;