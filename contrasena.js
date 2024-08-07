document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input-contrasena');
    const messageElement = document.getElementById('mensaje');
    const secretCode = 'bolso';
    const alertSound = document.getElementById('alertSound');
    const sound = document.getElementById('corazon')

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }

        // Comprobamos si se ha introducido el código secreto
        let currentInput = '';
        inputs.forEach(inp => currentInput += inp.value);

        if (currentInput === secretCode) {
            messageElement.textContent = 'Mira en el armario :)';
            messageElement.classList.add('visible'); // Añadir clase para mostrar
            sound.pause();
            alertSound.play(); // Reproducir sonido
        } else {
            messageElement.textContent = '';
            messageElement.classList.remove('visible'); // Eliminar clase para ocultar
        }
    });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});