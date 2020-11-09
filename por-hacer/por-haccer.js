const fs = require('fs');


let listadoPorHacer = [];

const guardarDb = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('no se pudo grabar', err);
  });

}


const cargarDB = () => {

  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }


}

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  }
  listadoPorHacer.push(porHacer);
  guardarDb();

  return porHacer;

}

const getListado = (descripcion) => {
  cargarDB();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDb();
    return true
  } else {
    return false;
  }
}

const borrar = (descripcion) => {
  cargarDB();
  let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
  if (listadoPorHacer.length === nuevoListado.length) {
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    guardarDb();
    return true
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}