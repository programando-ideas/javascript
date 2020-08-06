var modulo1 = require('./modules/modulo1');

let result = modulo1.sumar(1,2);
console.log(result);

result = modulo1.sumar(10,0);
console.log(result);

const pers = new modulo1.persona('Juan', 'Perez');
console.log(`La persona se llama ${pers.nombre} ${pers.apellido}`);