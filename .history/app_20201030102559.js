const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-haccer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    let listado = porHacer.getListado();
    for (const tarea of listado) {
      console.log('==============Por Hacer=============='.green);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado);
    }
    break;
  case 'actualizar':
    console.log('Actualizar tareas')
    break;

  default:
    console.log('comando no reconocido')
    break;
}