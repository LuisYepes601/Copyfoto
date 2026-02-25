export function headerColorCambio(header) {

    if (!header) return;



    if (window.scrollY > 200) {
        header.classList.add("header-scroll");
    
    } else {
        header.classList.remove("header-scroll");
    }
}