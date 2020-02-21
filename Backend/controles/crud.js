let config = require("../knexfile");
let env = "development";
let db = require("knex")(config[env]);

let getDatosWhere = (req, res) => {
  let tabla = req.query.tabla;
  let campo = req.query.campo;
  let where = req.query.where;
  db.select(campo)
    .from(tabla)
    .where("id_rol", where)
    .then(resultado => {
      return res.status(200).json({
        ok: true,
        datos: resultado
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};

let getDatos = (req, res) => {
  let tabla = req.query.tabla;
  let campo = req.query.campo;
  db.select(campo)
    .from(tabla)
    .then(resultado => {
      return res.status(200).json({
        ok: true,
        datos: resultado
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};

let postDatos = (req, res) => {
  let tabla = req.query.tabla;
  let datos = req.body.datos;
  db(tabla)
    .insert(datos)
    .then(resultado => {
      return res.status(200).json({
        ok: true,
        datos: resultado
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};

let updateDatos = (req, res) => {
  let tabla = req.body.tabla;
  let datos = req.body.datos;
  datos.forEach(element => {
    db(tabla)
      .where("id", element.id)
      .update(element)
      .then(resultado => {
        return res.status(200).json({
          ok: true,
          datos: resultado
        });
      })
      .catch(error => {
        return res.status(500).json({
          ok: false,
          datos: null,
          mensaje: `Error del servidor: ${error}`
        });
      });
  });
};

let deleteDatos = (req, res) => {
  let tabla = req.query.tabla;
  let id = req.query.id;
  db(tabla)
    .where("id", id)
    .delete()
    .then(resultado => {
      return res.status(200).json({
        ok: true,
        datos: resultado
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};

let getDatosbyID = (req, res) => {
  let tabla = req.query.tabla;
  let campo = req.query.campo;
  let id = req.query.id;
  db.select(campo)
    .from(tabla)
    .where("id", id)
    .then(resultado => {
      return res.status(200).json({
        ok: true,
        datos: resultado
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};

let login = (req, res) => {
  let tabla = "persona";
  let correo = req.body.correo;
  let clave = req.body.clave;
  let campo = req.body.campo;

  db.select(campo)
    .from(tabla)
    .then(resultado => {
      resultado.forEach(element => {
        if (element.correo === correo && element.clave === clave) {
          res.status(200).json({
            ok: true,
            mensaje: "found"
          });
        }
      });
      return res.status(500).json({
        ok: false,
        mensaje: "inc"
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datas: null
      });
    });
};

let getDatosAlumno = (req, res) => {
  // let idmatricula = req.query.idmatricula;
  db.raw(
    `select persona.id, persona.nombre as estudiante, persona.identificacion, persona.telf, persona.correo, 
    matricula.nombre as est_matricula, malla.nombre as est_malla, asistencia.porcentaje from persona join matricula on persona.id = matricula.id_persona
    join semestre_malla on semestre_malla.id = matricula.id_semestre_malla join malla
    on malla.id = semestre_malla.id_malla join parcial on matricula.id = parcial.id_matricula
    join asistencia on asistencia.id = parcial.id_asistencia;`
  )
    .then(resultado => {
      return res.status(200).json({
        ok: true,
        datos: resultado.rows
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};


let getNotasAlumno = (req, res) => {
  // let idmatricula = req.query.idmatricula;
  db.raw(
    `select persona.id, nota.investigacion, nota.vinculacion, nota.trabajo_practico, nota.evaluacion_final,
    nota.examen from persona join matricula on persona.id = matricula.id_persona join semestre_malla 
    on semestre_malla.id = matricula.id_semestre_malla join malla
    on malla.id = semestre_malla.id_malla join parcial on matricula.id = parcial.id_matricula
    join asistencia on asistencia.id = parcial.id_asistencia join nota on nota.id = parcial.id_nota;`
  )
    .then(resultado => {
      return res.status(200).json({
        ok: true,
        datos: resultado.rows
      });
    })
    .catch(error => {
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};



module.exports = {
  getDatos,
  postDatos,
  updateDatos,
  deleteDatos,
  getDatosbyID,
  login,
  getDatosWhere,
  getDatosAlumno,
  getNotasAlumno
};
