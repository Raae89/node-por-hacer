const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-haccer');

let comando = argv._[0];

switch (comando) {
  case 'crear':
   porHacer.crear( argv.descripcion);
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