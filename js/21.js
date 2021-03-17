// Arrow Function

// Expresión de la función
// const sumar2 = function(n1, n2) {
//     console.log(n1 + n2);
// }

// Se elimina la palabra reservada fuction, se agregan => despues de los paréntesis
// Si lo que queda es una sola linea de código entonces las {} son opcionales
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

// Cuando solamente se le pasa un parametro, los paréntesis son opcionales
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisión de 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//forEach con arrow fuction
meses.forEach(mes => console.log(mes));

let resultado;

// Some ideal para arreglos de objetos, sirve para saber si existe un elemento en el arreglo
// En arrow function si se tiene una sola linea y tienes un return, ese return es opcional 
resultado = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado);

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// Filter
resultado = carrito.filter(producto => producto.precio >= 500);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(resultado);