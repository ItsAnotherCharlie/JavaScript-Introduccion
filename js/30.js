// Promises
// Refleja un valor que podría estar disponible AHORA, en un FUTURO o NUNCA

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado');  // El Promise se cumple
    } else {
        reject('No se pudo iniciar sesión');  // El Promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))  // Mensaje del resolve
    .catch(error => console.log(error));  // Mensaje del reject

// En los Promises existen tres valores posibles
// Pending: No se ha cumplido pero tampoco se ha rechazado (está como en espera)
// FulFilled: Ya se cumplió
// Rejected: Se ha rechazado o no se pudo cumplir