document.addEventListener("DOMContentLoaded", function() {
    var imagenes = document.querySelectorAll('.imagen-contenedor img');
    var index = 0;
    
    function mostrarSiguienteImagen() {
        imagenes[index].style.opacity = '0'; // Oculta la imagen actual
        index = (index + 1) % imagenes.length; // Avanza al siguiente índice
        imagenes[index].style.opacity = '1'; // Muestra la siguiente imagen
    }
    
    // Mostrar la primera imagen y comenzar la transición después de un breve retraso
    setTimeout(function() {
        imagenes[0].style.opacity = '1'; // Muestra la primera imagen
        setInterval(mostrarSiguienteImagen, 2500); // Comienza la transición
    }, 2000); // Espera 1 segundo antes de mostrar la primera imagen
});
