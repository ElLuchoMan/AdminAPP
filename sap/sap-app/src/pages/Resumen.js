import React, { Component } from 'react';
import '../css/Resumen.css';
// import Cookies from 'universal-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'


// const cookies = new Cookies();
// const baseUrl = "http://127.0.0.1:8000/api/v1/persona/";
const persona = [
    { id: 1, username: "bryan", ingreso: null, tiempo: 0, click: null },
    { id: 2, username: "test1", ingreso: null, tiempo: 0, click: null },
    { id: 3, username: "test2", ingreso: null, tiempo: 0, click: null },
];

// const paginacion = [{
//     rowsPerPageText: 'Filas por página',
//     rangeSeparator: 'de',
//     selectAllRowsItem: true,
//     selectAllRowsItemText: 'Todos',

// }];

export default class Resumen extends Component {
    // cerrarSesion = () => {
    // cookies.remove('id', { path: "/" });
    // cookies.remove('username', { path: "/" });
    // cookies.remove('ingreso', { path: "/" });
    // cookies.remove('tiempo', { path: "/" });
    // cookies.remove('click', { path: "/" });
    // }
    render() {
        return (
            <div className="Pantalla">
                <h1>Resumen de personas</h1>
                <hr />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Ingreso</TableCell>
                                <TableCell>Tiempo</TableCell>
                                <TableCell>Click</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {persona.map((user) => (
                                <TableRow>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.ingreso}</TableCell>
                                    <TableCell>{user.tiempo}</TableCell>
                                    <TableCell>{user.click}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>
                </TableContainer>

            </div>
        )
    }
}
