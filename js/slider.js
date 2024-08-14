document.addEventListener("DOMContentLoaded", function() {
    // Función para inicializar un carrusel
    function initCarousel(carrusel) {
        let currentSlide = 0;
        const slides = carrusel.querySelectorAll('.imagen-canalon, .imagen-pladur');
        const totalSlides = slides.length;
        const botonesContainer = carrusel.querySelector('.botones');

        function showSlide(index) {
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            const offset = -currentSlide * 100;
            slides.forEach(slide => {
                slide.style.transform = `translateX(${offset}%)`;
            });

            carrusel.querySelectorAll('.boton').forEach((btn, idx) => {
                btn.classList.toggle('active', idx === currentSlide);
            });
        }

        // Crear botones para el carrusel
        for (let i = 0; i < totalSlides; i++) {
            const button = document.createElement('button');
            button.classList.add('boton');
            if (i === 0) button.classList.add('active');
            button.addEventListener('click', () => showSlide(i));
            botonesContainer.appendChild(button);
        }

        // Añadir funcionalidad a los botones de navegación
        carrusel.querySelector('.prev').addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        carrusel.querySelector('.next').addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Mostrar la primera diapositiva
        showSlide(currentSlide);
    }

    // Inicializar todos los carruseles en la página
    document.querySelectorAll('.carrusel').forEach(initCarousel);
});
