// Destructuring Assignment - Arrays
console.log('*** Destructuring Assignment - Arrays ***');

const arr1 = ['uno', 'dos', 'tres', 'cuatro'];

// Forma tradicional
const uno1 = arr1[0],
    dos1 = arr1[1],
    tres1 = arr1[2];
console.log('*** Forma tradicional ***');
console.log('uno1, dos1, tres1 -->', uno1, dos1, tres1);

// Destructuring Assignment
console.log('*** Destructuring Assignment ***')
const [uno2, , tres2, cuatro2] = arr1;
console.log('uno2, tres2, cuatro2 -->', uno2, tres2, cuatro2);

const [, , ...tres_cuatro] = arr1;
console.log('tres_cuatro', tres_cuatro);