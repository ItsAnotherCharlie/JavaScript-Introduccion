// Iteradores - Ciclos
// For Loop
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }


// Saber que numero es par o impar (Del 1 al 100)
// for(let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El número ${i} es impar`);
//     }
// }

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

for(producto of carrito) {
    console.log(producto.nombre, producto.precio);
}

// While Loop
// let i = 0;

// while(i <= 100) {
//     if(i % 2 === 0) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El número ${i} es impar`);
//     }
    
//     i++
// }

// Do While Loop
let i = 0;

do {
    console.log(i);

    i++
} while(i < 10)