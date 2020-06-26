var fs = require("fs");
var path = require('path');

function LeerArchivo() {
    const filePath = path.join(global.appRoot, 'files/arch.txt');

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function(err, data) {
            if (err) {
                // Ojo con el return, siempre se debe poner
                return reject(err);
            }

            resolve(data.toString());
        });
    });
}

module.exports = { LeerArchivo }