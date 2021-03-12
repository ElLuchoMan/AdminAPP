import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const baseUrl = "http://127.0.0.1:8000/api/page/";

export default class Principal extends Component {
    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('name', { path: "/" });
        window.location.href = "./";
    }
    componentDidMount() {
        if (cookies.get('admin')) {
            window.location.href = "./";
        }
    }
    render() {
        return (
            <div className="Pantalla">
                <h1>Bienvenido <button className="btn btn-primary float-right" onClick={() => this.cerrarSesion()}> Salir </button></h1>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="imagen" alt="Logo" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Escudo_UD.svg/1200px-Escudo_UD.svg.png'} />
                        </div>
                        <div className="col-md-9">
                            <h3>Titulo</h3>
                            <hr />
                            <h5>Descripcion</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-md-8 float-right">
                        <button className="btn btn-primary float-left">Boton 1</button>
                        <button className="btn btn-primary float-right">Boton2</button>
                    </div>
                </div>
            </div>
        )
    }

}
