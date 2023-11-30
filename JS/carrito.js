function agregarAlCarrito (producto){
    const almacenamiento = JSON.parse(localStorage.getItem("vehiculos")); // JSON.parse (Para que no me devuelva un string)
    console.log (almacenamiento)
    let cuenta = 0;
    // Si el almacenamiento no Existe:
    if (!almacenamiento) {
        const producto2 = NuevoItemParaAlmacenamiento(producto);
        localStorage.setItem("vehiculos", JSON.stringify([producto2])); // Cargamos el producto al LocasStorege
        cuenta = 1;
    } else {
        const cargarProducto = almacenamiento.findIndex(vehiculos => vehiculos.id === producto.id); // Si el ID que busco no lo encuentra me va a retornar un -1
        // console.log (cargarProducto)
        const nuevoAlmacenamiento = almacenamiento;
        if (cargarProducto === -1){
            nuevoAlmacenamiento.push(NuevoItemParaAlmacenamiento(producto));
            localStorage.setItem("vehiculos", JSON.stringify(nuevoAlmacenamiento));
            cuenta = 1;
            actualizarNumerito();
        } else {
            nuevoAlmacenamiento[cargarProducto].cantidad ++; // Si ya esxiste le sumo 1 unidad
            cuenta = nuevoAlmacenamiento[cargarProducto].cantidad;
            actualizarNumerito();
        }
        
        localStorage.setItem("vehiculos", JSON.stringify(nuevoAlmacenamiento));
        
    }
    actualizarNumerito();
    return cuenta;
    
    
}

function RestarDelCarrito (producto) {
    const almacenamiento = JSON.parse(localStorage.getItem("vehiculos"));
    const cargarProducto = almacenamiento.findIndex(vehiculos => vehiculos.id === producto.id);
    if (almacenamiento[cargarProducto].cantidad === 1) {
        almacenamiento.splice(cargarProducto, 1);
    } else {
        almacenamiento[cargarProducto].cantidad --;
    }
    
    localStorage.setItem("vehiculos", JSON.stringify(almacenamiento));
    actualizarNumerito();

}

// Esta funcion le agrega una unidad al producto y lo retorna 
function NuevoItemParaAlmacenamiento (producto) {
    const producto2 = producto;
    producto2.cantidad = 1;
    return producto2;
}

//funcion Actualizar Numerito
const numeritoCarrito = document.getElementById("numerito");

function actualizarNumerito(){
    const almacenamiento = JSON.parse(localStorage.getItem("vehiculos"));
    const suma = almacenamiento.reduce((acum, current) => acum + current.cantidad, 0); // Redusco un array a un solo elemento, en este caso un numero.
    numeritoCarrito.innerText = suma;
}

actualizarNumerito();
