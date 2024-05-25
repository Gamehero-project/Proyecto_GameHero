document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;

    //Falta la logica para mandar gmail

    // Ejemplo de respuesta exitosa
    var successMessage = document.createElement('div');
    successMessage.textContent = 'Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.';
    successMessage.style.color = 'green';
    document.getElementById('message').appendChild(successMessage);

    // Mostrar el botón de volver al inicio
    var backButton = document.createElement('button');
    backButton.textContent = 'Volver al Inicio';
    backButton.addEventListener('click', function() {
        window.location.href = '../index.html'; // Redirigir a la página de inicio
    });
    document.getElementById('message').appendChild(backButton);

    // Limpiar el formulario después de enviar la solicitud
    document.getElementById('resetForm').reset();
});
