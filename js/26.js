// Palabra reservada this
// This en este contexto va hacer referencia al objeto sobre el cual se esta mandando a llamar
// esta función

const reservacion = {
    nombre: 'Carlos',
    apellido: 'Sánchez',
    total: 550,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total}`);
    }
    // Un arrow function hace referencia a la ventana global
    // Un declaración de función hace referencia al objeto sobre el cual se esta ejecutando esa función
}

reservacion.informacion();