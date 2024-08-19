var mdl = document.getElementById("myModal");
var mdlI = document.getElementById("imgModal");
var nBtns = document.querySelectorAll('.next');
var pBtns = document.querySelectorAll('.prev');

function openModal(element) {
    nBtns.forEach(btn => {
        btn.style.display = "none";
    });
    pBtns.forEach(p => {
        p.style.display = "none";
    });

    mdl.style.display = "block";
    mdlI.src = element.src;
}

function closeModal() {
    mdl.style.display = "none";
    nBtns.forEach(btn => {
        btn.style.display = "block";
    });
    pBtns.forEach(p => {
        p.style.display = "block";
    });
}
