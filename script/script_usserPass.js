document.getElementById('btnIniciarSesion').addEventListener('click', function() {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Validación de usuario y contraseña
    if (usuario === "admin" && contrasena === "123456") {
        window.location.href = "../index.html"; // Redirigir a la página de inicio
    } 
    if(!usuario) {
        document.getElementById('usuarioError').style.display = 'block';
    } else {
        document.getElementById('usuarioError').style.display = 'none';
    }
    if (!contrasena) {
        document.getElementById('contrasenaError').style.display = 'block';
    } else {
        document.getElementById('contrasenaError').style.display = 'none';
    }
});
