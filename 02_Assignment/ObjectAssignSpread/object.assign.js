// Object.assign(target, ...sources)
console.log('*** Object.assign(target, ...sources) ***');

// Ejemplo 1
const persona1 = { nombre: 'Juan', apellido: 'Perez', edad: 45 };
const persona2 = { nombre: 'Pedro', apellido: 'Garcia' };

Object.assign(persona1, persona2);

console.log('Ejemplo 1 -->', persona1);

// Ejemplo 2
const persona3 = { nombre: 'Juan', apellido: 'Perez', edad: 45 };
const persona3_direccion = { calle: 'San Juan', numero: 29 };

const persona3_datos = Object.assign({}, persona3, persona3_direccion);
console.log('Ejemplo 2 -->', persona3_datos);