// Obtener el botón y el menú
const boton = document.getElementById('mostrar');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo')
// Agregar un evento clic al botón

boton.addEventListener('click', () => {
// Si el menú está oculto, mostrarlo; si está visible, ocultarlo
if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    logo.style.display = 'none';
} else {
    menu.style.display = 'none';
    logo.style.display = 'block';
}
});