// Funciones que retornan valores

function sumar(n1, n2) {
    return n1 + n2;
}

// Se retorna el valor de la ejecución de la función y ahora 'resultado' tiene
// el resultado de la función y se pueden realizar más operaciones con el.
const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPAgar = calcularImpuesto(total);

console.log(`Total: $${total} Total a Pagar con impuestos: $${totalAPAgar}`);