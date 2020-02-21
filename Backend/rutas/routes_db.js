const express = require("express");
let api = express.Router(),
  control = require("../controles/crud");

api.get("/matriz", control.getDatos);
api.post("/matrizPost", control.postDatos);
api.get("/matrizWhere", control.getDatosWhere);
api.put("/matriz", control.updateDatos);
api.delete("/matriz", control.deleteDatos);
api.get("/matrizById", control.getDatosbyID);
api.post("/login", control.login);
api.get("/alumno", control.getDatosAlumno);
api.get("/notas",control.getNotasAlumno);

module.exports = api;
