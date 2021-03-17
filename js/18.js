// Funciones con parametros y argumentos

// Declaración de funcion

// Aquí son parametros, al declarar la función
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

// Al llamar la función aquí se pasan argumentos (valores reales)
sumar(10, 10);
sumar(9, 9);

// Expresión de la función
// Aquí se utilizan parametros por default para que no de error cuando no se necesite uno de los parametros
// o no se manden todos los argumentos
const sumar2 = function(n1 = 0, n2 = 0) {
    console.log(3);
}

sumar2();