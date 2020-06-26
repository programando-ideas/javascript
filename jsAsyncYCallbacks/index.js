var callbacks = require('./src/callbacks');
var promise = require('./src/promise');
var asyncawait = require('./src/asyncawait');
var observable = require('./src/observable');

var path = require('path');
global.appRoot = path.resolve(__dirname);

console.log('///////////////');
console.log('// CallBacks //');
console.log('///////////////');
console.log('Antes de EjemploBasico');
callbacks.EjemploBasico();
console.log('Después de EjemploBasico');

function cb(arch) {
    console.log(arch);
}

console.log('Antes de LeerArchivo');
callbacks.LeerArchivo(cb);
console.log('Después de LeerArchivo');

console.log('');
console.log('///////////////////');
console.log('// CallBack Hell //');
console.log('///////////////////');

function suma(num, fn) {
    return num + fn(num);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrResp = arr.map(function(value, index) {
    return suma(value, function(value) {
        return suma(value, function(value) {
            return suma(value, function(value) {
                return suma(value, function(value) {
                    return value + 1;
                });
            });
        });
    });
});

console.log(arrResp);

console.log('');
console.log('//////////////');
console.log('// Promesas //');
console.log('//////////////');
console.log('Antes de la promesa');
const retProm = promise.LeerArchivo();

console.log('Promise return', retProm);

retProm.then((data) => {
    // se ejecuta si el llamado llama a "resolve"
    console.log('Promise then');
    console.log(data);
}).catch((err) => {
    // se ejecuta si el llamado llama a "reject"
    console.log('Promise catch', err);
});

console.log('');
console.log('///////////////////');
console.log('// async / await //');
console.log('///////////////////');
async function leeArch() {
    try {
        console.log('Async / Await - ANTES');
        const arch = await asyncawait.LeerArchivoAsync();
        console.log('Async / Await - DESPUES');
        console.log(arch);
    } catch (error) {
        console.error('Error async/await', error);
    }
}
leeArch();

console.log('');
console.log('/////////////////');
console.log('// Observables //');
console.log('/////////////////');
async function TestObservable() {
    console.log('Antes del observable');

    //Ejemplo 1
    const observarEventos = observable.GetObservable();

    observarEventos.subscribe({
        next: (evento) => {
            console.log(evento);
        },
        error: (err) => {
            console.error('Error en el observado:' + err);
        },
        complete: () => {
            console.log('Fin de los eventos');
        }
    });

    //Ejemplo 2
    //await observable.IniciarObservableAsync();
    console.log('Después del observable');
}

TestObservable();