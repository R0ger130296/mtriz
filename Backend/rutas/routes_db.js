const express = require("express");
let api = express.Router(),
  control = require("../controles/crud");

api.get("/matriz", control.getDatos);
api.post("/matriz", control.postDatos);
api.put("/matriz", control.updateDatos);
api.delete("/matriz", control.deleteDatos);
api.get("/matrizById", control.getDatosbyID);
api.post("/login", control.login);

module.exports = api;
