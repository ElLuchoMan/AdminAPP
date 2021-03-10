import React, { Component } from 'react'
import '../css/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="ContainerPrincipal">
                <div className="ContainerSecundario">
                    <label>Usuario</label>
                    <br />
                    <input type="text" className="form-control" />
                    <br />
                    <label>Contraseña</label>
                    <br/>
                    <input type="password" className="form-control" />
                    <br />
                    <button className="btn btn-primary">Iniciar Sesión</button>
                </div>
            </div>
        )
    }
}
export default Login;