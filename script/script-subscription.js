document.addEventListener('DOMContentLoaded', function() {
    // Obtener la fecha actual
    var fechaActual = new Date();

    // Calcular la fecha hace un año
    var fechaLimite = new Date(fechaActual);
    fechaLimite.setFullYear(fechaLimite.getFullYear() - 1);

    // Convertir la fecha límite a un formato compatible con el input date
    var limiteFormato = fechaLimite.toISOString().split('T')[0];

    // Obtener el elemento input date
    var inputFechaNacimiento = document.getElementById('fechaNacimiento');

    // Establecer el atributo max en el elemento input date
    inputFechaNacimiento.setAttribute('max', limiteFormato);

    // Manejo del formulario de registro
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Recopilar datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const contraseña = document.getElementById('contraseña').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const pais = document.getElementById('pais').value;
        const provincia = document.getElementById('provincia').value;
        const ciudad = document.getElementById('ciudad').value;
        const categorias = Array.from(document.querySelectorAll('input[name="categorias"]:checked')).map(el => el.value);


        // Por ahora, mostramos un mensaje de éxito

        // Cerrar el formulario
        form.reset();

        // Mostrar un mensaje de éxito dentro del formulario
        const mensajeExito = document.getElementById('mensajeExito');
        mensajeExito.textContent = 'Registro exitoso, revise su casilla de correo';
        mensajeExito.style.display = 'block';
    });
});
