document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('abrir-mas');
    const imgs = document.querySelectorAll('.mas');

    btn.addEventListener('click', function() {
        imgs.forEach(img => {
            img.style.display = 'block';
        });
        btn.style.display = 'none';
    });
    
});