const contenedorDeProductos = document.getElementById("contenedorDeProductos");
const cantidadItem = document.getElementById("cantidad");
const precioItem = document.getElementById("precio");
const reiniciarItem = document.getElementById("reiniciar");
const comprarItem = document.getElementById("comprar")

function itemsInicio (){
    contenedorDeProductos.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("vehiculos"));
    console.log(productos)
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            const nuevoVehiculo = document.createElement ("div")
            nuevoVehiculo.classList = "item";
            nuevoVehiculo.classList = "item2"; ///
            nuevoVehiculo.innerHTML = `
            <img src=${producto.img}>
            <h2>${producto.nombre}</h2>
            <span> $ ${producto.precio}</span>
            <div>
                <button>-</button>
                <span class="cantidad">${producto.cantidad}</span>
                <button>+</button>
            </div>
            `
            contenedorDeProductos.appendChild(nuevoVehiculo);

            nuevoVehiculo
            .getElementsByTagName("button") [1] 
            .addEventListener ("click", (e)=> {
                agregarAlCarrito(producto)
                itemsInicio();
                sumarTotales ();
                actualizarNumerito()
                
            }); // asigno el Boton y enviamos el producto del array

            nuevoVehiculo
            .getElementsByTagName("button") [0] 
            .addEventListener ("click", (e)=> {
                RestarDelCarrito(producto);
                itemsInicio();
                sumarTotales ()
                actualizarNumerito()
            })
        });
    }


}
itemsInicio ();
sumarTotales ()

function sumarTotales () {
    const productos = JSON.parse(localStorage.getItem("vehiculos"));
    let unidades = 0;
    let precio = 0;
    if (productos && productos.length>0) {
        productos.forEach(producto=>{
            unidades+= producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        cantidadItem.innerText = unidades;
        precioItem.innerText = precio;
    }
}

reiniciarItem.addEventListener("click", reiniciar);
function reiniciar () {
    localStorage.removeItem("vehiculos");
    sumarTotales();
    itemsInicio ();
    actualizarNumerito();
}






// comprarItem.addEventListener("click", () => {
//     Swal.fire({
//         title: "Gracias por Tu compra",
//         text: "Te esperamos pronto",
//         icon: "success"
//     });
// reiniciar ();
// sumarTotales();
// itemsInicio ();
// })

