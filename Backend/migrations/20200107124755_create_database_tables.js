exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("rol", function(table) {
      table.increments("id");
      table.string("nombre").unique();
    })

    .createTable("materia",function(table){
      table.increments("id");
      table.string("nombre");
    })

    .createTable("carrera",function(table){
      table.increments("id");
      table.string("nombre");
    })

    .createTable("asistencia",function(table){
      table.increments("id");
      table.string("porcentaje");
    })

    .createTable("malla",function(table){
      table.increments("id");
      table.string("nombre");
    })

    .createTable("nota",function(table){
      table.increments("id");
      table.integer("investigacion");
      table.integer("vinculacion");
      table.integer("trabajo_practico");
      table.integer("evaluacion_final");
      table.integer("examen");
    })

    .createTable("persona", function(table) {
      table.increments("id");
      table.string("nombre");
      table.string("identificacion");
      table.string("telf");
      table.string("correo");
      table.string("clave").unique();
      table.integer("id_rol").references("id").inTable("rol");
    })

    .createTable("semestre",function(table){
      table.increments("id");
      table.string("nombre");
      table.integer("id_materia").references("id").inTable("materia");
    })

    .createTable("semestre_malla",function(table){
      table.increments("id");
      table.integer("id_semestre").references("id").inTable("semestre");
      table.integer("id_malla").references("id").inTable("malla");
    })

    .createTable("matricula",function(table){
      table.increments("id");
      table.string("nombre");
      table.integer("id_persona").references("id").inTable("persona");
      table.integer("id_semestre_malla").references("id").inTable("semestre_malla");
      table.integer("id_carrera").references("id").inTable("carrera");
    })

    .createTable("parcial",function(table){
      table.increments("id");
      table.string("nombre");
      table.integer("id_nota").references("id").inTable("nota");
      table.integer("id_matricula").references("id").inTable("matricula");
      table.integer("id_asistencia").references("id").inTable("asistencia");
    })

};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("rol")
    .dropTableIfExists("materia")
    .dropTableIfExists("carrera")
    .dropTableIfExists("asistencia")
    .dropTableIfExists("malla")
    .dropTableIfExists("nota")
    .dropTableIfExists("persona")
    .dropTableIfExists("semestre")
    .dropTableIfExists("semestre_malla")
    .dropTableIfExists("matricula")
    .dropTableIfExists("parcial")
};
