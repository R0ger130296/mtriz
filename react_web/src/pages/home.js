import React, { Component } from 'react';
import axios from 'axios';

const API = "http://localhost:8000/server/all";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        detalles: [],
    }
}

componentDidMount() {
    axios.get(API)
    .then(response => {
        this.setState({ detalles: response.data.datos })
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    const {detalles}=this.state;
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
              <tr className="border-b">
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Nombre Estudiante</th>
                <th className="text-left p-3">Cédula</th>
                <th className="text-left p-3">Teléfono</th>
                <th className="text-left p-3">Correo</th>
                <th className="text-left p-3">Matrícula</th>
                <th className="text-left p-3">Malla</th>
                <th className="text-left p-3">Asistencia</th>
              </tr>
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                {detalles.map(element=><td className="p-3"key={ element.id}>{element.id}</td>)}
                {detalles.map(element=><td className="p-3"key={ element.id}>{element.estudiante}</td>)}
                <td className="p-3">Identificación</td>
                <td className="p-3">Telefono</td>
                <td className="p-3">Correo</td>
                <td className="p-3">Matrícula</td>
                <td className="p-3">Malla</td>
                <td className="p-3">Asistencia</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-3">Media</th>
                <td className="p-3 px-5">Valor</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-3">Mediana</th>
                <td className="p-3 px-5">Valor</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex">
          <div className="m-3">
            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Parcial 1</span>
            </button>
          </div>
          <div className="m-3">
            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Parcial 2</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <table className="text-md bg-white shadow-md rounded mb-4">
            <thead className="bg-black text-black w-full">
              <tr className="border-b">
                <th className="text-center bg-red-200 p-5">ID</th>
                <th className="text-center bg-blue-200 py-3">
                  Actividades de Vinculación
                </th>
                <th className="text-center bg-green-200 py-3">
                  Trabajos Prácticos
                </th>
                <th className="text-center bg-yellow-200 py-3">
                  Evaluación Escrita
                </th>
                <th className="text-center bg-red-200 py-3">Examen Final</th>
              </tr>
            </thead>

            <tbody className="">
              <tr>
                <td className="bg-red-200">
                  <br></br>
                  <h5 className="ml-5">1</h5>
                </td>
                <td className="bg-blue-200">
                  <div className="flex">
                    <h5 className="p-1">Salidas / Convenciones</h5>
                    <h5 className="p-1">Parametro de Evaluación</h5>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                  </div>
                </td>

                <td className="bg-green-200">
                  <div className="flex">
                    <h5 className="p-1">Conceptos Básicos</h5>
                    <h5 className="p-1">Demostración Formular</h5>
                    <h5 className="p-1">Gráfica de funciones y áreas</h5>
                    <h5 className="p-1">Taller</h5>
                    <h5 className="p-1">Promedio</h5>
                    <h5 className="p-1">% Parametro de evaluación</h5>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                  </div>
                </td>

                <td className="bg-yellow-200">
                  <div className="flex">
                    <h5 className="p-1 mx-auto">Nota</h5>
                    <h5 className="p-1 mx-auto">Promedio</h5>
                    <h5 className="p-1 mx-auto">% Parametro de evaluación</h5>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                  </div>
                </td>

                <td className="bg-red-200">
                  <div className="flex">
                    <h5 className="p-1 mx-auto">Examen</h5>
                    <h5 className="p-1 mx-auto">Recuperación</h5>
                    <h5 className="p-1 mx-auto">Nota Final</h5>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="SI / NO"
                    />
                    <input
                      type="text"
                      className="border px-1"
                      placeholder="Nota"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
