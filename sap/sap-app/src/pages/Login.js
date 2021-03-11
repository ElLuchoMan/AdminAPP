import { Component } from 'react'
import '../css/Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "http://127.0.0.1:8000/api/v1/persona/";
const cookies = new Cookies();

export default class Login extends Component {
    state = {
        form: {
            username: '',
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

    }
    iniciarSesion = async () => {
        await axios.get(baseUrl, { params: { username: this.state.form.username, password: this.state.form.password } })
            .then(response => {
                console.log(response.data);
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: "/" });
                    cookies.set('username', respuesta.username, { path: "/" });
                    cookies.set('ingreso', respuesta.ingreso, { path: "/" });
                    cookies.set('tiempo', respuesta.tiempo, { path: "/" });
                    cookies.set('boton1', respuesta.click, { path: "/" });
                    cookies.set('boton2', respuesta.click, { path: "/" });
                    alert('Bienvenido ');
                    window.location.href = "./resumen";
                } else {
                    alert('Username o Password Incorrectos');
                }
            })
            .catch(error => {
                console.log(error);
            })
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
                        <input type="text" name="username" className="form-control" placeholder="Ingrese Username" onChange={this.handleChange} />
                        <br />
                        <label>Contraseña</label>
                        <br />
                        <input type="password" name="password" className="form-control" placeholder="Ingrese Contraseña" onChange={this.handleChange} />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        )
    }
}
