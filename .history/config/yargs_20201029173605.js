const argv = require('yargs');

const opts = {
  description: {
    demand: true,
    alias: 'd'
  },
  completado: {
    alias: 'c',
    default: true
  }
}


  .command('crear', 'Crea un elemento por hacer', opts)
  .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
  .help()
  .argv;


  module.exports = {
    argv
  }