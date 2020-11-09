const fs = require('fs');


let listadoPorHacer = [];

const guardarDb = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

}


const crear = (descripcion) => {
  let porHacer = {
    descripcion,
    completado:false
  }
  listadoPorHacer.push(porHacer);

  return porHacer;

}

module.exports = {
  crear
}