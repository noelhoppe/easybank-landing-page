const mobileNavbar = () => {
    const btn = document.querySelector("#toggle-mobile-menu");
    const mobileMenu = document.querySelector("#mobile-menu");
    const iconHamburger = document.querySelector("#icon-hamburger");
    const iconClose = document.querySelector("#icon-close");
    let isOpen = false;
    btn.addEventListener("click", () => {
        isOpen = !isOpen;
        if (isOpen) {
            mobileMenu.style.display = "block";
            iconClose.style.display = "block";
            iconHamburger.style.display = "none";
        } else {
            mobileMenu.style.display = "none";
            iconClose.style.display = "none";
            iconHamburger.style.display = "block";
        }
    });
}
export default mobileNavbar;