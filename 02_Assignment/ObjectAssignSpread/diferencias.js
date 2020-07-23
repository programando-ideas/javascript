// Object.assign(target, ...sources) vs Object spread obj = {...obj2 }
console.log('*** Object.assign(target, ...sources) vs Object spread obj = {...obj2 } ***');

// Manejo de Propiedades
//  - Object.assign invoca a los setters de los objetos
//  - Object spread define propiedades nuevas sobreescribiendo las originales  (inmutable)
class Persona {
    set nombre(nom) {
        console.log('Se invocó al setter del nombre', nom);
        this.nom = nom;
    }
    get nombre() {
        return this.nom;
    }
}
let persona2 = new Persona();
persona2.nombre = 'Jose Sanchez';

let persona = new Persona();
Object.assign(persona, persona2);
console.log('persona -->', persona);

let persona3 = new Persona();
persona3 = {...persona2 };
console.log('persona3 -->', persona3);

// Con Object.assign siempre hay que asegurarse de que el primer parametro
// este seteado o pasarle {}
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign({}, obj1, obj2);
console.log('obj3 --> ', obj3);