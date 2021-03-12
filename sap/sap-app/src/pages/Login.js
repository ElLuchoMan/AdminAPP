import React, { Component } from 'react'
import '../css/Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "http://127.0.0.1:8000/api/persona/";
const cookies = new Cookies();
class Login extends Component {
    state = {
        form: {
            name: '',
            password: '',
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.form);
    }
    iniciarSersion = async () => {
        await axios.get(baseUrl, { params: { name: this.state.form.name, password: this.state.form.password } })
            .then(response => {
                // console.log(response.data);
                return response.data;
            }).then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: "/" });
                    cookies.set('name', respuesta.name, { path: "/" });
                    alert(`Bienvenido ${respuesta.name}`);
                    if (respuesta.admin === true) {
                        cookies.set('admin', respuesta.admin, { path: "/" });
                        window.location.href = "./resumen";
                    } else {
                        window.location.href = "./principal";
                    }
                } else {
                    alert('Usuario o contraseña incorrectos');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        if (cookies.get('admin')) {
            window.location.href = "./resumen";
        }
        else if (cookies.get('user') && !cookies.get('admin')) {
            window.location.href = "./principal";
        }
    }

    render() {
        return (
            <div className="Pantalla">
                <h1>Inicio de sesión</h1>
                <hr />
                <div className="ContainerPrincipal">
                    <div className="ContainerSecundario">
                        <label>Username</label>
                        <br />
                        <input type="text" name="name" className="form-control" placeholder="Ingrese Username" onChange={this.handleChange} />
                        <br />
                        <label>Contraseña</label>
                        <br />
                        <input type="password" name="password" className="form-control" placeholder="Ingrese Contraseña" onChange={this.handleChange} />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.iniciarSersion()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;

