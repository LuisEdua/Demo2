import B1 from '../atoms/buttons/B1'
import P1 from '../atoms/ps/Text'
import I1 from '../atoms/inputs/i1'
import {useState} from 'react'
function formularioInicio(){
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [usserName, setUsserName] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeName = (event) => { setName(event.target.value) }
    const handleChangeLastName = (event) => { setLastName(event.target.value) }
    const handleChangeUsserName = (event) => { setUsserName(event.target.value) }
    const handleChangePassword = (event) => { setPassword(event.target.value) }

    const handleBlur = (event) => {
        fetch('http://44.201.115.90/user/usernameValidate/'+usserName)
        .then(response => response.json())
        .then (data => data.status ? alert('Usuario ocupado') : '')
    }

    function handleSubmit(event) {
        event.preventDefault();

        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                lastname: lastName,
                username: usserName,
                password: password
            })
        }
        fetch('http://ec2-52-23-209-79.compute-1.amazonaws.com/user/', option)
            .then(response => response.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) })
    }
    return (
        <form onSubmit={handleSubmit}>
            <P1 id={"nameP"} value={"Nombre"} />
            <I1 id={"name"} type={"Text"} placeholder={"Nombre"} className={"LoginI"} value={name} onChange={handleChangeName} />
            <P1 id={"lastNameP"} value={"Apellido"} />
            <I1 id={"lastName"} type={"Text"} placeholder={"Apellido"} className={"LoginI"} value={lastName} onChange={handleChangeLastName} />
            <P1 id={"UsserP"} value={"Nombre de usuario"} />
            <I1 id={"usserName"} type={"Text"} placeholder={"Usuario"} className={"LoginI"} value={usserName} onChange={handleChangeUsserName} />
            <P1 id={"PasswordP"} value={"Password"} />
            <I1 id={"password"} type={"Password"} placeholder={"Password"} className={"LoginI"} value={password} onChange={handleChangePassword} />
            <br />
            <center><B1 id={"LB1"} value={"Registrarse"}/></center>
        </form>
    )
}
export default formularioInicio;