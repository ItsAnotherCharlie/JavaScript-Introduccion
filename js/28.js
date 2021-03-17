// Clases en JavaScript

class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    formatearProducto() {
        return `Producto: ${this.nombre} Precio: $${this.precio} Disponible: ${this.disponible}`
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

// Instanciar
const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop de 15"', 600, false);

console.log(producto2);
console.log(producto3);

// Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // Aquí se utiliza super para que busque los parametros de la clase padre
        this.isbn = isbn;
    }

    formatearProducto() {
        return `Producto: ${this.nombre} Precio: $${this.precio} ISBN: ${this.isbn}`
    }

    // formatearProducto() {
    //     return `${super.formatearProducto()} ISBN: ${this.isbn}`
    // }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Si hay en existencia');
    }
}

const libro = new Libro('JavaScript La Revolución', 120, '133545654765435');

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());