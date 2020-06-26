var fs = require("fs");
var path = require('path');

function EjemploBasico() {
    setTimeout(() => {
        console.log('Fin del timeout');
    }, 2000);
}

function LeerArchivo(fnCallback) {
    const filePath = path.join(global.appRoot, 'files/arch.txt');

    fs.readFile(filePath, function(err, data) {
        if (err) return console.error(err);
        fnCallback(data.toString());
    });
}

module.exports = { EjemploBasico, LeerArchivo }