// Estructuras de control
// === igual estricto   !== difente estricto
// > Mayor que   < Menor que
// >= Mayor o Igual   <= Menor o Igual

const puntaje = 1000;

if(puntaje === 1000) {
    console.log('El puntaje es 1000');
} else {
    console.log('No es igual');
}

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos Insuficientes');
}


const rol = 'editor';

if(rol === 'administrador'){ 
    console.log('Acceso a todo el sistema');
} else if(rol === 'editor') {
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
} else {
    console.log('No tienes acceso');
}