import B1 from '../atoms/buttons/B1'
import P1 from '../atoms/ps/Text'
import I1 from '../atoms/inputs/i1'
function formularioInicio(){
    return(
        <form>
            <P1 id={"nombreP"} value={"Correo o nombre de usuario"}></P1>
            <I1 id={"Usser"} type={"Text"} placeholder={"Usuario"} className={"LoginI"}></I1>
            <P1 id={"ContraseñaP"} value={"Password"}></P1>
            <I1 id={"Password"} type={"Password"} placeholder={"Password"} className={"LoginI"}></I1>
            <br/>
            <center><B1 id={"LB1"} value={"Iniciar sesion"}></B1></center>
        </form>
    )
}
export default formularioInicio;