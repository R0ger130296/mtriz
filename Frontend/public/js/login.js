const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/login";

getDataLogin = () => {
  let correo = document.getElementById("persona_email").value;
  let contraseña = document.getElementById("persona_clave").value;

  http.open("GET", API_URL + "?tabla=persona");

  http.responseType = "json";

  http.onload = () => {
    let datos = http.response.datos;
    let correoBD;
    let contraseñaBD;

    datos.forEach(element => {
      if (
        element.persona_email == correo &&
        element.persona_clave == contraseña
      ) {
        correoBD = element.persona_email;
        contraseñaBD = element.persona_clave;
      }
    });

    if (correo === correoBD) {
      if (contraseña === contraseñaBD) {
        window.location.assign("./index.html");
      }
    } else {
      alert("Datos incorrectos, intentelo nuevamente");
    }
  };

  http.send();
};