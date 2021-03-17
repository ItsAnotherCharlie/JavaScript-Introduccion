// Funciones

// Hoisting (JavaScript se ejecuta dos veces) primero se registran las funciones,
// despues los llamados a las funciones (Ejecución de código).

// Declaración de funcion

function sumar() {
    console.log(10 + 10);
}

sumar();

// Expresión de la función
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE
// Funciones que no necesitan llamarse por que se mandan a llamar a ellas mismas
// Sirven para proteger variables y funciones para que no se mezclen con otros archivos
(function () {
    console.log('Esto es una función')
})();