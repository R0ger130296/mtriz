import React, { Component } from "react";
import axios from "axios";
import AddEstudiante from "./addEstudiante";

const API = "http://localhost:8000/server/";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalles: [],
      t_head: {
        id: "Id",
        estudiante: "Nombres y Apellidos",
        identificacion: "Cédula/pasaporte",
        telf: "Teléfono",
        correo: "Email",
        matricula: "Mátricula",
        malla: "Malla",
        porcentaje: "Asistencia"
      },
      notas: []
    };
  }

  componentDidMount() {
    axios
      .get(API + "alumno")
      .then(response => {
        this.setState({ detalles: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(API + "notas")
      .then(response => {
        this.setState({ notas: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { detalles, notas } = this.state;
    return (
      <div>
        <div className="flex bg-teal-500 p-6 justify-between">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <svg
              className="h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              Sistema de Notas YAVIRAC
            </span>
          </div>
          <div className="mr-10 mt-1">
            <div>
              <a
                className="items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                href="http://localhost:3000/"
              >
                Salir
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="text-gray-900">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
              <tr className="border-b">
                <th className="text-left p-3">{this.state.t_head.id}</th>
                <th className="text-left p-3">
                  {this.state.t_head.estudiante}
                </th>
                <th className="text-left p-3">
                  {this.state.t_head.identificacion}
                </th>
                <th className="text-left p-3">{this.state.t_head.telf}</th>
                <th className="text-left p-3">{this.state.t_head.correo}</th>
                <th className="text-left p-3">{this.state.t_head.matricula}</th>
                <th className="text-left p-3">{this.state.t_head.malla}</th>
                <th className="text-left p-3">
                  {this.state.t_head.porcentaje}
                </th>
              </tr>
              <tr className="border-b">
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.id}{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.estudiante}{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.identificacion}{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.telf}{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.correo}{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.matricula}{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.malla}{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {detalles.map(element => (
                    <p className="p-2 pr-6 text-justify" key={element.id}>
                      {" "}
                      {element.porcentaje}{" "}
                    </p>
                  ))}
                </td>
              </tr>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-3">Media</th>
                <td className="p-3 px-5">Valor</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-3">Mediana</th>
                <td className="p-3 px-5">Valor</td>
              </tr>
              </tbody>              
            </table>
          </div>
          
          <div>
            <AddEstudiante/>
          </div>
        </div>
        <div className="flex justify-between my-8">
        <h5 className="mx-auto">PARCIAL 1</h5>
        <h5 className=" mx-auto">PARCIAL 2</h5>
        </div>
        <div className="w-full flex justify-between">
          <table className="ml-10 text-md bg-white shadow-md rounded mb-4">
            <thead className="bg-black text-black w-full">
              <tr className="border-b">
                <th className="text-center bg-red-200 p-5">Alumno</th>
                <th className="text-center bg-blue-200 py-3">Investigación</th>
                <th className="text-center bg-green-200 py-3">Vinculación</th>
                <th className="text-center bg-yellow-200 py-3">
                  Trabajo Práctico
                </th>
                <th className="text-center bg-red-200 py-3">
                  Evaluación Final
                </th>
                <th className="text-center bg-blue-200 py-3">Examem</th>
              </tr>
            </thead>

            <tbody className="">
              <tr>
                <td className="bg-red-200">
                  {notas.map(element => (
                    <h5 key={element.id} className="ml-5">{element.estudiante}</h5>
                  ))}
                </td>
                {notas.map(element => (
                  <td key={element.id} className="bg-blue-200">{element.investigacion}</td>
                ))}

                {notas.map(element => (
                  <td key={element.id} className="bg-green-200">{element.vinculacion}</td>
                ))}

                {notas.map(element => (
                  <td key={element.id} className="bg-yellow-200">{element.trabajo_practico}</td>
                ))}

                {notas.map(element => (
                  <td key={element.id} className="bg-red-200">{element.nota_final}</td>
                ))}
                {notas.map(element => (
                  <td key={element.id} className="bg-blue-200">{element.examen}</td>
                ))}
              </tr>
            </tbody>
          </table>
          <table className="mr-10 text-md bg-white shadow-md rounded mb-4">
            <thead className="bg-black text-black w-full">
              <tr className="border-b">
                <th className="text-center bg-red-200 p-5">Alumno</th>
                <th className="text-center bg-blue-200 py-3">Investigación</th>
                <th className="text-center bg-green-200 py-3">Vinculación</th>
                <th className="text-center bg-yellow-200 py-3">
                  Trabajo Práctico
                </th>
                <th className="text-center bg-red-200 py-3">
                  Evaluación Final
                </th>
                <th className="text-center bg-blue-200 py-3">Examem</th>
              </tr>
            </thead>
 
            <tbody className="">
              <tr>
                <td className="bg-red-200">
                  {notas.map(element => (
                    <h5 className="ml-5">{element.estudiante}</h5>
                  ))}
                </td>
                {notas.map(element => (
                  <td className="bg-blue-200">{element.investigacion}</td>
                ))}

                {notas.map(element => (
                  <td className="bg-green-200">{element.vinculacion}</td>
                ))}

                {notas.map(element => (
                  <td className="bg-yellow-200">{element.trabajo_practico}</td>
                ))}

                {notas.map(element => (
                  <td className="bg-red-200">{element.nota_final}</td>
                ))}
                {notas.map(element => (
                  <td className="bg-blue-200">{element.examen}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
