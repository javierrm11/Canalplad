document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mostrar");
  const mn = document.getElementById("menu");
  const lg = document.getElementById("logo");

  btn.addEventListener("click", () => {
    // Obtener el estilo de visualización actual del menú
    const displayStyle = window.getComputedStyle(mn).display;

    // Alternar entre agregar y quitar la clase 'active' al menú
    if (mn.classList.contains("active")) {
      mn.classList.remove("active");
      lg.classList.remove("hidden");
    } else {
      mn.classList.add("active");
    }
  });
  const currentPath = window.location.pathname.split("/").pop(); // obtiene el archivo actual
  const links = document.querySelectorAll("#menu a");

  links.forEach(link => {
    let linkPath = link.getAttribute("href");
    linkPath = linkPath.slice(linkPath.lastIndexOf("/") + 1); // obtiene solo el archivo del enlace    
    if (linkPath === currentPath || (linkPath === "./index.html" && (currentPath === "" || currentPath === "index.html"))) {
      link.classList.add("active");
    }
  });
});
