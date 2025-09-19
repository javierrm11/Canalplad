// JavaScript para los carruseles
document.addEventListener('DOMContentLoaded', function() {
    // Configuración para el carrusel de canalones
    const carruselCanalones = document.querySelector('#canalones .imagenes-canalones');
    const dotsCanalones = document.querySelectorAll('#canalones .dot');
    const prevBtnCanalones = document.querySelector('#canalones .prev');
    const nextBtnCanalones = document.querySelector('#canalones .next');
    const itemsCanalones = document.querySelectorAll('#canalones .imagen-canalon');
    
    // Configuración para el carrusel de pladur
    const carruselPladur = document.querySelector('#pladur .imagenes-pladur');
    const dotsPladur = document.querySelectorAll('#pladur .dot');
    const prevBtnPladur = document.querySelector('#pladur .prev');
    const nextBtnPladur = document.querySelector('#pladur .next');
    const itemsPladur = document.querySelectorAll('#pladur .imagen-pladur');
    
    let currentIndexCanalones = 0;
    let currentIndexPladur = 0;
    
    // Función para actualizar el carrusel de canalones
    function updateCarruselCanalones() {
        carruselCanalones.style.transform = `translateX(-${currentIndexCanalones * 100}%)`;
        
        // Actualizar dots
        dotsCanalones.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndexCanalones);
        });
    }
    
    // Función para actualizar el carrusel de pladur
    function updateCarruselPladur() {
        carruselPladur.style.transform = `translateX(-${currentIndexPladur * 100}%)`;
        
        // Actualizar dots
        dotsPladur.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndexPladur);
        });
    }
    
    // Event listeners para botones de canalones
    prevBtnCanalones.addEventListener('click', () => {
        currentIndexCanalones = (currentIndexCanalones > 0) ? currentIndexCanalones - 1 : itemsCanalones.length - 1;
        updateCarruselCanalones();
    });
    
    nextBtnCanalones.addEventListener('click', () => {
        currentIndexCanalones = (currentIndexCanalones < itemsCanalones.length - 1) ? currentIndexCanalones + 1 : 0;
        updateCarruselCanalones();
    });
    
    // Event listeners para botones de pladur
    prevBtnPladur.addEventListener('click', () => {
        currentIndexPladur = (currentIndexPladur > 0) ? currentIndexPladur - 1 : itemsPladur.length - 1;
        updateCarruselPladur();
    });
    
    nextBtnPladur.addEventListener('click', () => {
        currentIndexPladur = (currentIndexPladur < itemsPladur.length - 1) ? currentIndexPladur + 1 : 0;
        updateCarruselPladur();
    });
    
    // Event listeners para dots de canalones
    dotsCanalones.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndexCanalones = index;
            updateCarruselCanalones();
        });
    });
    
    // Event listeners para dots de pladur
    dotsPladur.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndexPladur = index;
            updateCarruselPladur();
        });
    });
    
    // Auto-play para los carruseles
    setInterval(() => {
        currentIndexCanalones = (currentIndexCanalones < itemsCanalones.length - 1) ? currentIndexCanalones + 1 : 0;
        updateCarruselCanalones();
    }, 5000);
    
    setInterval(() => {
        currentIndexPladur = (currentIndexPladur < itemsPladur.length - 1) ? currentIndexPladur + 1 : 0;
        updateCarruselPladur();
    }, 5000);
    
    
});