// Arrays

const numeros = [10, 20, 30, 40, 50];

// console.log(numeros);
// console.table(numeros); // Para ver de mejor manera el arreglo

// // Acceder a los valores de un arreglo utilizando el indice
// console.log(numeros[4]);

// // Conocer la longitud de un arreglo
// console.log(numeros.length);

// // Iterador de arreglos para saber ver todos los valores
// //forEach = Por cada uno de ellos
// numeros.forEach(num => {
//     console.log(num)
// });

// Agregar el elemento al final del arreglo
numeros.push(60);
numeros.push(70);

// Agrega el elemento al inicio del arreglo
numeros.unshift(-10);
numeros.unshift(-20);
numeros.unshift(-30);

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// Eliminar el ultimo elemento de un arreglo
// meses.pop();

// Eliminar el primer elemento del arreglo
// meses.shift();

// Eliminar un elemento en especifico
// arreglo.splice(indice del elemento a eliminar, cuantos quieres eliminar apartir de ahi);
// meses.splice(2, 1);

console.table(meses);

// Utilizar el Spread Operator para no modificar el arreglo original y agregar un elemento (buenas prácticas)

// Agregar al final
// const nuevoMeses = [...meses, 'Junio'];

// Agregar al inicio
const nuevoMeses = ['Junio', ...meses]

console.table(nuevoMeses);