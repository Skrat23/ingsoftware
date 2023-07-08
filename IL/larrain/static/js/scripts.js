$(document).ready(function() {
  $('#navbar-container').load('navbar.html');
});

// Script para validar un formulario de pedido
function validarPedidoFormulario() {
    // Obtener los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;
  
    // Validar que los campos no estén vacíos
    if (nombre === '' || email === '' || direccion === '') {
      alert('Por favor, complete todos los campos del formulario.');
      return false;
    }
  
    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese una dirección de correo electrónico válida.');
      return false;
    }
  
    // Validación exitosa, enviar el formulario
    alert('¡Pedido enviado con éxito!');
    return true;
  }

// Script para resaltar la página actual en la barra de navegación
function resaltarPaginaActual() {
    var url = window.location.pathname;
    var currentPage = url.substring(url.lastIndexOf('/') + 1);
  
    // Obtener todos los elementos de la barra de navegación
    var enlaces = document.getElementsByClassName('nav-link');
  
    // Recorrer los enlaces y resaltar el que corresponde a la página actual
    for (var i = 0; i < enlaces.length; i++) {
      var enlace = enlaces[i];
      var href = enlace.getAttribute('href');
  
      if (href === currentPage) {
        enlace.classList.add('active');
      } else {
        enlace.classList.remove('active');
      }
    }
}

// Script para manejar la búsqueda de productos
function buscarProductos() {
    var inputBusqueda = document.getElementById('input-busqueda');
    var terminoBusqueda = inputBusqueda.value.toLowerCase();
  
    // Obtener todos los elementos de productos
    var productos = document.getElementsByClassName('producto');
  
    // Ocultar o mostrar los productos según el término de búsqueda
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var nombreProducto = producto.getElementsByClassName('nombre')[0].innerText.toLowerCase();
  
      if (nombreProducto.includes(terminoBusqueda)) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    }
  }