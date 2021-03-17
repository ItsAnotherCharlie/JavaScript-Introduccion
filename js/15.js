// Más Arrays Methods

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

// Includes, saber si algo existe en un arreglo (Retorna True o False). Funciona bien en arreglo plano
let resultado = meses.includes('Marzo');
// console.log(resultado);

// Some ideal para arreglos de objetos, sirve para saber si existe un elemento en el arreglo
resultado = carrito.some(producto => producto.nombre === 'Celular');

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter(producto => producto.precio >= 500);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(resultado);