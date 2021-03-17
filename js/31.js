// Notification API

const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`));
});


if(Notification.permission === 'granted') {
    // Creamos un objeto de la clase Notification para una nueva notificación
    // Toma dos valores: 1) El título de la notificación 2) Un objeto con algunas opciones// Creamos un objeto de la clase Notification para una nueva notificación
    // Toma dos valores: 1) El título de la notificación 2) Un objeto con algunas opciones
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Juan. Los mejores tutoriales'
    });
}