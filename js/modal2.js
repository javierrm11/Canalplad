// Funcionalidad para la galería modal
document.addEventListener("DOMContentLoaded", function () {
  let imagenes = document.querySelectorAll(".imagen");
  imagenes.forEach((img) => {
    img.addEventListener("click", function () {
      openModal(this);
    });
  });
  openModal = function (img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    modal.classList.add("show");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  };

  window.closeModal = function () {
    const modal = document.getElementById("myModal");
    modal.classList.remove("show");
  };

  // Cerrar modal al hacer clic fuera de la imagen
  document.getElementById("myModal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });
});
