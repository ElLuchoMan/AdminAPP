import React, { Component } from 'react'
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class Login extends Component {
    state = {
        form: {
            email: ' ',
            password: ' ',
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }
    render() {
        return (
            <div className="Pantalla">
                <h1>Inicio de sesión</h1>
                <hr />


                <div className="ContainerPrincipal">
                    <div className="ContainerSecundario">
                        <label>Email</label>
                        <br />
                        <input type="text" name="email" className="form-control" placeholder="Ingrese Email" onChange={this.handleChange} />
                        <br />
                        <label>Contraseña</label>
                        <br />
                        <input type="password" name="password" className="form-control" placeholder="Ingrese Contraseña" onChange={this.handleChange} />
                        <br />
                        <button className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        )
    }
}
