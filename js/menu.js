// Obtener el botón, el menú y el logo
const boton = document.getElementById('mostrar');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// Agregar un evento clic al botón
boton.addEventListener('click', () => {
    // Obtener el estilo de visualización actual del menú
    const displayStyle = window.getComputedStyle(menu).display;

    // Alternar entre mostrar y ocultar el menú
    if (displayStyle === 'none') {
        menu.style.display = 'flex';
        logo.style.display = 'none';
    } else {
        menu.style.display = 'none';
        logo.style.display = 'block';
    }
});

