const contenedorDeProductos = document.getElementById("contenedorDeProductos")

function itemsInicio (productos) {
productos.forEach(producto => {
    const nuevoVehiculo = document.createElement ("div")
    nuevoVehiculo.classList = "item";
    nuevoVehiculo.innerHTML = `
    <img src=${producto.img}>
    <h2>${producto.nombre}</h2>
    <span> $ ${producto.precio}</span>
    <button>Agregar</button>
    `
    contenedorDeProductos.appendChild(nuevoVehiculo);
    nuevoVehiculo.getElementsByTagName("button") [0] .addEventListener ("click", ()=> agregarAlCarrito(producto)); // asigno el Boton y enviamos el producto del array
});
}
itemsInicio (vehiculos)