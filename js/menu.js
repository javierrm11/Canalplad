const btn = document.getElementById('mostrar');
const mn = document.getElementById('menu');
const lg = document.getElementById('logo');

btn.addEventListener('click', () => {
    // Obtener el estilo de visualización actual del menú
    const displayStyle = window.getComputedStyle(mn).display;

    // Alternar entre mostrar y ocultar el menú
    if (displayStyle === 'none') {
        mn.style.display = 'flex';
        lg.style.display = 'none';
    } else {
        mn.style.display = 'none';
        lg.style.display = 'block';
    }
});

