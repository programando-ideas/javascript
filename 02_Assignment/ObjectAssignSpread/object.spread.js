// Object spread obj = {...obj2 }
console.log('*** Object spread obj = {...obj2 } ***');

// Ejemplo 1
const persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 45,
    telefono: '+529999999999',
    direccion: {
        calle: 'Avenida AAA',
        numero: 345,
        piso: 3,
        depto: 2
    }
};

let persona2 = {
    nombre: 'Jose',
    apellido: 'Garcia'
};

persona2 = {...persona1, salario: 12345.67 };
console.log(persona2);

// Ejemplo 2
const obj1 = { a1: 1, b1: 'Hola' };
const obj2 = { a2: 1, b1: 'Mundo' };

const obj3 = {...obj1, ...obj2 };
console.log(obj3);

// Ejemplo 3 - Array
const arr = [];
const arr2 = [1, 2, 3, 4, 5, 6];
arr.push(...arr2);
console.log(arr);