import { suma1 } from './ES6.js';

console.log('** Dentro de main.js **');
console.log(suma1(100));
//console.log('variable_global_modulo', variable_global_modulo); // Da error

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

function suma2(num) {
    return suma1(suma1(num));
}

export { saludar, suma2 }