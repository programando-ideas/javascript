// Destructuring Assignment - Objetos
console.log('*** Destructuring Assignment - Objetos ***');

const persona = {
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

// Forma tradicional
console.log(`La persona ${persona.nombre} ${persona.apellido} 
tiene ${persona.edad} años`);

// Destructuring Assignment
const {
    direccion: {
        calle: vCalle,
        numero: vNumero
    }
} = persona;
console.log(`Calle ${vCalle}, número ${vNumero}`);

const {
    direccion: {
        calle,
        numero
    }
} = persona;
console.log(`Calle ${calle}, número ${numero}`);

/*
Los paréntesis (...) alrededor de la sentencia de asignación son obligatorios 
cuando se usa asignación object literal destructuring
(asignación desestructurante literal de objetos) sin una declaración.
Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
 */
const paises = [
    { pais: 'México', cod: 52, },
    { pais: 'Perú', cod: 51 },
    { pais: 'Colombia', cod: 57 },
    { pais: 'Argentina', cod: 54 }
];

paises.forEach(e => {
    ({ pais: p } = e);
    console.log(p);
});