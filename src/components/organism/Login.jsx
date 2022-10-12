import FI from "../molecules/FormularioInicio"
import EI from "../molecules/EncabezadoInicio"
import '../../assets/styles/Login.css';

function login(){
    return(
        <div className="Login">
            <EI/>
            <FI/>
        </div>
    )
}
export default login;