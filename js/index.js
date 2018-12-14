(() => {
    const site = document.querySelector(".site");
    const navbar = document.querySelector(".navbar");
    const navbarFolio = document.querySelector(".folio-nav-item-container");

    site.addEventListener("scroll", e => {
        requestAnimationFrame(() => {
            if (navbar.offsetTop > 50) {
                if (!navbar.classList.contains("scrolled")) {
                    navbar.classList.add("scrolled");
                    navbarFolio.classList.add("scrolled");
                }
            } else {
                if (navbar.classList.contains("scrolled")) {
                    navbar.classList.remove("scrolled");
                    navbarFolio.classList.remove("scrolled");
                }
            }
        });
    });
})();
