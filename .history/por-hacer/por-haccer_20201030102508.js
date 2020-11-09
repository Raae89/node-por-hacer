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

module.exports = {
  crear,
  getListado
}