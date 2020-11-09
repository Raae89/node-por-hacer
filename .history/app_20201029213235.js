const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-haccer');

let comando = argv._[0];

switch (comando) {
  case 'crear':
  let tarea =  porHacer.crear( argv.descripcion);
  console.log(tarea);
    break;
  case 'listar':
    console.log('Mostrar todas las tareas')
    break;
  case 'actualizar':
    console.log('Actualizar tareas')
    break;

  default:
    console.log('comando no reconocido')
    break;
}