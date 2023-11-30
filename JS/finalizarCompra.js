const FinalizarCompra = document.getElementById('finalizarCompra');


document.addEventListener('DOMContentLoaded', function () {
    // Escuchar el evento clic en el botón "comprar"
    FinalizarCompra
    .addEventListener('click', function (evento) {
    evento.preventDefault();

      // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var metodoPago = document.getElementById('metodos').value;

      // Crear un objeto con los datos de compra
    var datosCompra = {
        nombre,
        apellido,
        email,
        telefono,
        metodoPago,
    };
    Swal.fire({
        title: '¡Muchas gracias por su compra!',
        html: 'Datos de compra:<br><pre>' + JSON.stringify(datosCompra, null, 2) + '</pre>',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        // Redirigir a la página de inicio
        window.location.href = '/index.html';
        actualizarNumerito()
        reiniciar ()
    });
    });
});

