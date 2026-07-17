document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".artist-menu-button");
    const navigation = document.querySelector(".artist-navigation");
    const navigationLinks = document.querySelectorAll(".artist-navigation a");

    if (!menuButton || !navigation) {
        console.warn("Randie mobile navigation elements were not found.");
        return;
    }

    const closeMenu = () => {
        navigation.classList.remove("mobile-open");
        menuButton.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("mobile-open");

        menuButton.classList.toggle("menu-open", isOpen);
        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});