// String o Cadenas de texto

const producto = 'Monitor de 20 pulgadas';
const producto2 = String('Monitor de 30 pulgadas'); // String creado con constructor
const producto3 = new String('Monitor de 50 pulgadas'); // String typeof Object
const producto4 = "Monitor de 60\"";

console.log(producto.length); // .length Cantidad de caracteres en un String
console.log(producto2);
console.log(producto3);
console.log(producto4);

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';

// indexOf te da la posición de inicio de la busqueda. Resultado -1 significa que no lo pudo encontrar
console.log(tweet.indexOf('JavaScript'));

// includes te retorna True o False como resultado de la busqueda
console.log(tweet.includes('JavaScript'));