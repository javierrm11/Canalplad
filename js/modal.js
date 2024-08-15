var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");
var nextButtons = document.querySelectorAll('.next');
var prevButtons = document.querySelectorAll('.prev');

function openModal(element) {
     // Selecciona todos los elementos con la clase "next"

    // Ocultar todos los botones con la clase "next"
    nextButtons.forEach(button => {
        button.style.display = "none";
    });
    prevButtons.forEach(prev => {
        prev.style.display = "none";
    });

    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
     // Selecciona todos los elementos con la clase "next"

    modal.style.display = "none";

    // Mostrar nuevamente todos los botones con la clase "next"
    nextButtons.forEach(button => {
        button.style.display = "block";
    });
    prevButtons.forEach(prev => {
        prev.style.display = "block";
    });
}
