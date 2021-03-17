// Try catch
// Se utiliza en situaciones muy especificas  y que sean de importancia para tu app
// Ejemplos: Si un usuario pudo iniciar sesión o no
// Ejemplos: Si una conexión a bd se puso realizar o no
// Ejemplos: Si un pago se pudo realizar o no

const numero1 = 20;
const numero3 = 30;

console.log(numero1);

try {
    console.log(numero2);
} catch (error) {
    console.log(error);
}

console.log(numero3);