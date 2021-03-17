// Objetos

// Creación de objeto
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// console.log(producto);

// Acceder a sus valores
// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

// console.log(producto['precio']);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.imagen;

console.log(producto);