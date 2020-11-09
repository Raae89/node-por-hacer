const fs = require('fs');


let listadoPorHacer = [];

const guardarDb = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('no se pudo grabar', err);
  });

}


const cargarDB = () => {
  listadoPorHacer = require('../db/data.json');
  console.log(listadoPorHacer);
}

const crear = (descripcion) => {
  let porHacer = {
    descripcion,
    completado: false
  }
  listadoPorHacer.push(porHacer);
  guardarDb();

  return porHacer;

}

module.exports = {
  crear
}