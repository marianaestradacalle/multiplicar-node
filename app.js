const colors = require('colors');
const argv = require('./config/yargs').argv;

// Importar el archivo de la lógica
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(e => console.log(e));

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.blue }`))
            .catch(e => console.log(e));

        break;

    default:
        console.log('Comando no reconocido');

}