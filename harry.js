document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el campo de entrada
    const input = document.getElementById('input-cuadro');
    
    // Función para verificar el valor del input
    function checkInput() {
        if (input.value === 'Alohomora') {
            // Redirige a otro archivo HTML cuando el valor es '123'
            window.location.href = 'index.html'; 
        }
    }

    // Agrega un evento de escucha para detectar cambios en el campo de entrada
    input.addEventListener('input', checkInput);
});
