function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}