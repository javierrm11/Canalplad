// JavaScript para funcionalidades modernas
document.addEventListener('DOMContentLoaded', function() {
    // Animación de elementos al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Efecto de escritura para el título
    const titulo = document.querySelector('.que-es h4');
    if (titulo) {
        const text = titulo.textContent;
        titulo.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titulo.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar efecto después de un breve retraso
        setTimeout(typeWriter, 500);
    }
});