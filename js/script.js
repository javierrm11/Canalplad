document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('abrir-mas');
    const images = document.querySelectorAll('.mas');

    button.addEventListener('click', function() {
        images.forEach(image => {
            image.style.display = 'block';
        });
        button.style.display = 'none'; // Oculta el botón después de mostrar las imágenes
    });
    
});