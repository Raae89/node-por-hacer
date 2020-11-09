const argv = require('yargs');

const opts = {
  description: {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
  },
  completado: {
    alias: 'c',
    default: true,
    desc: "Marca como completado la tarea"
  }
}

  argv.command('crear', 'Crea un elemento por hacer', opts)
  .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
  .help()
  .argv;


module.exports = {
  argv
}