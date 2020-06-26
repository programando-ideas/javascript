var fs = require("fs");
var path = require('path');

async function LeerArchivoAsync() {
    // LeerArchivo().then((data) => {}).catch((err) => {});

    try {
        return await LeerArchivo();
    } catch (error) {
        console.log(error);
    }
}

function LeerArchivo() {
    const filePath = path.join(global.appRoot, 'files/arch.txt');

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function(err, data) {
            if (err) {
                // Ojo con el return, siempre se debe poner
                console.log('Antes del reject');
                return reject(err);
            }
            console.log('Antes del resolve');
            resolve(data.toString());
        });
    });
}

module.exports = { LeerArchivo, LeerArchivoAsync }