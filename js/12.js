// Object Methods

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Object.freeze(producto); // Congelar para que no se puedan agregar más propiedades ni eliminarlas ni modificarlas

// console.log(Object.isFrozen(producto)); // Saber si un objeto está congelado



Object.seal(producto); // Sellar para que no se puedan agregar más propiedades ni eliminarlas pero SI modificarlas

console.log(Object.isSealed(producto)); // Saber si un objeto está sellado