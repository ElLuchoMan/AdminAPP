import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const baseUrl = "http://127.0.0.1:8000/api/page/";
const urlPersona = "http://127.0.0.1:8000/api/persona/";

export default class Principal extends Component {
    state = {
        page: [],
        persona: [],

    }
    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('name', { path: "/" });
        window.location.href = "./";
    }
    async componentDidMount() {
        if (cookies.get('admin') || !cookies.get('name')) {
            window.location.href = "./";
        }
        await this.fetchPage()
        await this.fetchPersona()
    }
    fetchPage = async () => {
        let res = await fetch(baseUrl)
        let page = await res.json()
        this.setState({
            page
        })
        // console.log(page);
    }
    fetchPersona = async () => {
        let res = await fetch(urlPersona)
        let persona = await res.json()
        this.setState({
            persona
        })
    }
    contarClicks = (boton) => {
        var cboton1 = this.state.persona.boton1;

        if (boton === "boton1") {
            this.setState({
                cboton1: this.state.cboton1 + 1
            });
            alert('Boton1');
            console.log(this.state.cboton1);
        } else if (boton === "boton2") {

        }
    }

    render() {
        return (
            <div className="Pantalla">
                <h1>Bienvenido <button className="btn btn-primary float-right" onClick={() => this.cerrarSesion()}> Salir </button></h1>
                <hr />
                <div className="container">
                    {this.state.page.map((pag) => (
                        <div className="row">
                            <div className="col-md-3">
                                <img className="imagen" alt="Logo" src={pag.logo} />
                            </div>
                            <div className="col-md-9">
                                <h3>{pag.titulo}</h3>
                                <hr />
                                <h5>{pag.descripcion}</h5>
                            </div>
                        </div>
                    ))}



                </div>
                <div className="container">
                    <div className="col-md-8 float-right">
                        <button className="btn btn-primary float-left" onClick={() => this.contarClicks("boton1")}>Boton 1</button>
                        <button className="btn btn-primary float-right" onClick={() => this.contarClicks("boton2")}>Boton2</button>
                    </div>
                </div>
            </div>
        )
    }

}
