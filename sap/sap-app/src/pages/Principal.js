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
        countb1: 1,
        countb2: 1,

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
    clicksBoton1 = () => {
        this.setState({ countb1: this.state.countb1 + 1 })
        alert(`Presionó el botón uno la siguiente cantidad de veces: ${this.state.countb1}`);
        console.log(this.state.countb1);

    }
    clicksBoton2 = () => {
        this.setState({ countb2: this.state.countb2 + 1 })
        alert(`Presionó el botón dos la siguiente cantidad de veces: ${this.state.countb2}`);
        console.log(this.state.countb2);
    }

    render() {
        return (
            <div className="Pantalla">
                <h1>Hola {cookies.get('name')} <button className="btn btn-primary float-right" onClick={() => this.cerrarSesion()}> Salir </button></h1>
                <hr />
                <div className="container">
                    {this.state.page.map((pag) => (
                        <div className="row">
                            <div className="col-md-3 float-left">
                                <img className="imagen" alt="Logo" src={pag.logo} />
                            </div>
                            <div className="col-md-8 ml-3 float-right">
                                <h3>{pag.titulo}</h3>
                                <hr />
                                <h5>{pag.descripcion}</h5>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="container">
                    <div className="col-md-8 float-right">
                        <button className="btn btn-primary float-left" onClick={() => this.clicksBoton1()}>Boton 1</button>
                        <button className="btn btn-primary float-none" onClick={() => this.clicksBoton2()}>Boton2</button>
                    </div>
                </div>
            </div>
        )
    }

}
