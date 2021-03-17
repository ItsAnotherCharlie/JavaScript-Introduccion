// Spread Operator
// Crea una copia del objeto

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//{... objeto que se desea agregar}
// Así no se modifica los valores originales
const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);