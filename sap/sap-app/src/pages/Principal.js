import React, { Component } from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class Principal extends Component {
    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('username', { path: "/" });
        cookies.remove('ingreso', { path: "/" });
        cookies.remove('tiempo', { path: "/" });
        cookies.remove('click', { path: "/" });
    }


    render() {
        return (
            <div>

            </div>
        )
    }

}
