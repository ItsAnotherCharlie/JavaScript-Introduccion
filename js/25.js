// forEach y map
// Son métodos exclusivos de arreglos

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

// forEach
// Cuando se quiera iterar sobre un arreglo para mostrar los elementos en pantalla
// o simplemente enviarlos a la consola se utiliza el forEach
carrito.forEach(producto => console.log(producto.nombre, producto.precio));

// map
// Si se quiere crear un nuevo arreglo se utiliza el map
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);