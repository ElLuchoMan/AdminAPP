import React, { Component } from 'react';
import '../css/Styles.css';
import Cookies from 'universal-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, LineSeriesCanvas, LineSeries} from 'react-vis';
import 'react-vis/dist/style.css'

const cookies = new Cookies();
const baseUrl = "http://127.0.0.1:8000/api/persona/";

export default class Resumen extends Component {
    state = {
        persona: [],
    }
    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('name', { path: "/" });
        cookies.remove('admin', { path: "/" });
        window.location.href = "./";
    }
    async componentDidMount() {
        if (!cookies.get('admin')) {
            window.location.href = "./";
        }
        await this.fetchPersonas()
    }
    fetchPersonas = async () => {
        let res = await fetch(baseUrl)
        let persona = await res.json()
        this.setState({
            persona
        })
        console.log(persona);
    }
    render() {

        return (
            <div className="Pantalla" >
                <h1>Resumen de personas<button className="btn btn-primary float-right" onClick={() => this.cerrarSesion()}> Salir </button></h1>
                <hr />
                <div className="container">
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Tiempo</TableCell>
                                    <TableCell>Boton 1</TableCell>
                                    <TableCell>Boton 2</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.persona.map((user) => (
                                    <TableRow>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
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
                <h5>Persona vs Tiempo</h5>
                <hr />
                <div className="container">
                    <XYPlot className="xyPlot" xType="ordinal" width={window.innerWidth * 0.8} height={500}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis title="Usuario" />
                        <YAxis title="Tiempo Activo"/>
                        {this.state.persona.map((user) =>

                            <VerticalBarSeries  color="red"data={[
                                    { x: user.name, y: user.tiempo },
                                ]}
                            />
                        )}
                    </XYPlot>


                </div>
            </div>
        )
    }
}
