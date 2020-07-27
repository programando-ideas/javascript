// Object.assign(target, ...sources) vs Object spread obj = {...obj2 }
console.log('*** Object.assign(target, ...sources) vs Object spread obj = {...obj2 } ***');

// Manejo de Propiedades
//  - Object.assign invoca a los setters de los objetos
//  - Object spread define propiedades nuevas sobreescribiendo las originales  (inmutable)
class Persona {
    set nombre(nom) {
        console.log('Se invocó al setter', nom);
        this.nom = nom;
    }
    get nombre() {
        return this.nom;
    }
}

console.log('/*** Object.assign ***/');
let persona1 = new Persona();
Object.assign(persona1, { nombre: 'Jose' });
console.log(persona1);

console.log('/*** Object Spread ***/');
let persona2 = new Persona();
persona2 = { ...{ nombre: 'Juan' } };
console.log(persona2);

// Con Object.assign siempre hay que asegurarse de que el primer parametro
// este seteado o pasarle {}
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign({}, obj1, obj2);
console.log('obj3 --> ', obj3);