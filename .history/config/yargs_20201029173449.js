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

const argv = require('yargs')
  .command('crear', 'Crea un elemento por hacer', opts)
  .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
  .help()
  .argv;


  module.exports = {
    argv
  }