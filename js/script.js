window.addEventListener("scroll", () => {
    const sportif = document.querySelector(".scrollsport");

    // Obtiens le pourcentage de scroll vertical
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    // Calcule une nouvelle position horizontale (par exemple sur 90% de largeur écran)
    const maxLeft = window.innerWidth - sportif.clientWidth;
    sportif.style.left = scrollPercent * maxLeft + "px";
  });