import React, { Component } from "react";
import axios from "axios";

const API = "http://localhost:8000/server/matrizPost?tabla=persona";

class AddEstudiante extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      identificacion: '',
      telf: '',
      correo: '',
      clave: '',
      id_rol: 2
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = e => {
    e.preventDefault();
    this.post = {
      datos: {
        nombre: this.state.nombre,
        identificacion: this.state.identificacion,
        correo: this.state.correo,
        telf: this.state.telf,
        clave: this.state.clave,
        id_rol: this.state.id_rol
      }
    };

    console.log(JSON.stringify(this.post.datos));

    if (
      this.post.datos.nombre === "" ||
      this.post.datos.identificacion === "" ||
      this.post.datos.correo === "" ||
      this.post.datos.telf === "" ||
      this.post.datos.clave === "" ||
      this.post.datos.id_rol === ""
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios.post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Agregado exitosamente");
            window.location.assign("http://localhost:3000/home");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const { nombre, identificacion, correo, telf } = this.state;
    return (
      <div>
        <div className="mx-6 pt-6 pb-8">
          <div className="md:left-0 leading-loose">
            <form
              className="md:mr-0 m-4 p-10 bg-white rounded shadow-xl"
              onSubmit={this.saveData}
            >
              <p className="text-gray-800 font-medium">Añadir Estudiante</p>
              <div className="">
                <label className="block text-sm text-gray-600" htmlFor="nombre">
                  Nombres y Apellidos
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="nombre"
                  name="nombre"
                  type="text"
                  required={true}
                  value={nombre}
                  placeholder="ej: ROJAS SALAZAR JUAN ANDRES"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="identificacion"
                >
                  Cédula/pasaporte
                </label>
                <input
                  className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                  id="identificacion"
                  name="identificacion"
                  type="text"
                  required={true}
                  value={identificacion}
                  placeholder="Añade un identificacion"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label className=" block text-sm text-gray-600" htmlFor="telf">
                  Teléfono
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  type="telf"
                  required={true}
                  name="telf"
                  min="0"
                  value={telf}
                  placeholder="Añade un teléfono"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label
                  className=" block text-sm text-gray-600"
                  htmlFor="correo"
                >
                  Correo
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  type="text"
                  required={true}
                  name="correo"
                  value={correo}
                  placeholder="example@gmail.com"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center"
                  type="submit"
                >
                  <span className="mr-2">Guardar</span>
                  <i className="far fa-check-circle" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEstudiante;
