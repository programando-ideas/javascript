// Destructuring Assignment - Funciones
console.log('*** Destructuring Assignment - Funciones ***');

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

// Forma Tradicional
function mostrarPersona(per) {
    console.log(`/***
La persona ${per.nombre} ${per.apellido} 
tiene ${per.edad} años
y vive en ${per.direccion.calle}, #${per.direccion.numero}
***/`);
}

mostrarPersona(persona);

// Destructuring Assignment
function mostrarPersonaDA({
    nombre: n,
    apellido: a,
    direccion: {
        calle: c
    }
}) {
    console.log(`/***
La persona se llama ${n} ${a}
Calle ${c}
***/`);
}

mostrarPersonaDA(persona);

//  Destructuring Assignment - Valores default
const persona2 = {
    apellido: 'Perez',
    edad: 45
};

function mostrarPersonaDA2({
    nombre: n = 'S/N',
    apellido: a
}) {
    console.log(`/***
La persona se llama ${n} ${a}
***/`);
}

mostrarPersonaDA2(persona2);