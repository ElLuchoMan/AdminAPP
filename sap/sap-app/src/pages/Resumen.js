import React, { Component } from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class Resumen extends Component {
    cerrarSesion=()=> {
        cookies.remove('id', respuesta.id, { path: "/" });
        cookies.remove('username', respuesta.username, { path: "/" });
        cookies.remove('ingreso', respuesta.ingreso, { path: "/" });
        cookies.remove('tiempo', respuesta.tiempo, { path: "/" });
        cookies.remove('click', respuesta.click, { path: "/" });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
