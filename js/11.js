// Destructuring de Objetos

// Creación de objeto
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// const {variables a extraer del objeto} = nombre del objeto
const {nombreProducto, precio, disponible} = producto;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);