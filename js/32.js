// Async / Await
// Cuando una linea depende de otra, entonces si se tiene que bloquear

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes ... Espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos ... Espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}


// async function app() {
//     try {
//         const resultado = await descargarNuevosClientes();
//         console.log('Este código si se bloquea');
//         console.log(resultado)
//     } catch (error) {
//         console.log(error);
//     }
// }

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)

        // Para optimizar un llamado Async / Await utilizamos .all()
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();

// console.log('Este código no se bloquea');