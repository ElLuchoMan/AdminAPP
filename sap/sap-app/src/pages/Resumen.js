import React, { Component } from 'react';
import '../css/Styles.css';
import Cookies from 'universal-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import axios from 'axios'
import { Line } from '@ant-design/charts';


const cookies = new Cookies();
const baseUrl = "http://127.0.0.1:8000/api/persona/";
// const data = [
//     { id: 1, username: "bryan", ingreso: null, tiempo: 0, boton1: null, boton2: null },
//     { id: 2, username: "test1", ingreso: null, tiempo: 100, boton1: null, boton2: null },
//     { id: 3, username: "test2", ingreso: null, tiempo: 150, boton1: null, boton2: null },
// ];
const data = [];
const peticionApi = async () => {
    await axios.get(baseUrl).then(response => {
        this.data=response.data;
    })
}
const config = {
    data,
    height: 400,
    xField: 'username',
    yField: 'tiempo',
    point: {
        size: 5,
        shape: 'circle',
    },
    label: {
        style: {
            fill: '#aaa',
        },
    },
};

export default class Resumen extends Component {
    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('username', { path: "/" });
        cookies.remove('ingreso', { path: "/" });
        cookies.remove('tiempo', { path: "/" });
        cookies.remove('click', { path: "/" });
    }
    render() {
        return (
            <div className="Pantalla">
                <h1>Resumen de personas</h1>
                <hr />
                <div className="container">
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Ingreso</TableCell>
                                    <TableCell>Tiempo</TableCell>
                                    <TableCell>Boton 1</TableCell>
                                    <TableCell>Boton 2</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((user) => (
                                    <TableRow>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.ingreso}</TableCell>
                                        <TableCell>{user.tiempo}</TableCell>
                                        <TableCell>{user.boton1}</TableCell>
                                        <TableCell>{user.boton2}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <hr />
                <h1>Gráfica</h1>
                <hr />
                <div className="container">
                    <Line {...config} />
                </div>

            </div>
        )
    }
}
