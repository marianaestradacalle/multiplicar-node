// Requireds
const colors = require('colors');
const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }

        console.log('=========================='.brightGreen);
        console.log(`========Tabla de ${base}========`.brightGreen);
        console.log('=========================='.brightGreen);




        for (i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }

    });

};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }

        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(`Ocurrió un error ${err}`);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};