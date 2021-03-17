// Métodos de propiedad (Función con sintaxis de método)
// Siempre tiene que ser un objeto

const reproductorMusical = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

// Función por fuera del objeto, creando la propiedad por fuera
reproductorMusical.eliminarCancion = function(id) {
    console.log(`Eliminando Canción: ${id}`);
}

reproductorMusical.reproducir(120);
reproductorMusical.pausar();
reproductorMusical.eliminarCancion(120);
reproductorMusical.crearPlaylist('Heavy Metal');
reproductorMusical.reproducirPlaylist('Heavy Metal');