const argv = require('yargs').argv;
console.log(argv);

let comando = argv._[0];

switch (comando) {
  case 'crear':
    console.log('crear por hacer')
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