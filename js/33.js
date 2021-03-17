// Fetch API
// Permite enviar información al servidor u obtener información de un servidor
// Puedes obtener un archivo local o una respuesta de un servidor (Texto O JSON(JavaScript Object Notation))
// JSON = Lenguaje de transporte de datos
// Utiliza Promises o Async / Await como todas las API´s modernas de JS 

// function obtenerEmpleados() {
//     const url = 'empleados.json'

//     fetch(url)
//         .then(resultado => resultado.json()) // Función .json() para saber que el resultado es un json y retornar al siguiente .then
//         .then(datos => { // Aquí ya accedemos a los datos
//             // console.log(datos.empleados);

//             const {empleados} = datos;
//             console.log(empleados);

//             // for(empleado of empleados) {
//             //     console.log(`ID: ${empleado.id} Nombre: ${empleado.nombre} Puesto: ${empleado.puesto}`);
//             // }

//             // empleados.forEach(empleado => {
//             //     console.log(`ID: ${empleado.id} Nombre: ${empleado.nombre} Puesto: ${empleado.puesto}`);
//             // });
//         }) 
// }

// obtenerEmpleados();

// Async / Await
async function obtenerEmpleados() {
    const url = 'empleados.json'

    const resultado = await fetch(url);  // Función .json() para saber que el resultado es un json y retornar al siguiente .then
    const datos = await resultado.json();  // Aquí ya accedemos a los datos

    const {empleados} = datos
    console.log(empleados);
}

obtenerEmpleados();