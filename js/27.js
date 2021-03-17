// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object constructor
// La primera letra siempre va en mayúsculas
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// EL prototype nos va a permitir crear funciones que solo se utilizan en un objeto en especifico
// Tiene que ser como el nombre de la clase
Producto.prototype.formatearProducto = function() {
    return `Producto: ${this.nombre} Precio: $${this.precio} Disponible: ${this.disponible}`
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop de 15"', 600, false);
const producto4 = new Producto('Bocinas BOSE"', 400, false);
const producto5 = new Producto('Teclado Gamer"', 400, true);

console.log(producto2.formatearProducto());
// console.log(producto3);
// console.log(producto4);
// console.log(producto5);

// function formatearProducto(producto) {
//     return `Producto: ${producto.nombre} Precio: $${producto.precio} Disponible: ${producto.disponible}`
// }

// console.log(formatearProducto(producto2));