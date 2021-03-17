// Switch

const metodoPago = 'cheque';

//Adentro del parentesis es lo que se va a evaluar
switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque, se revisaran los fondos');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}