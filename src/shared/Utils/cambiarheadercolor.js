export function headerColorCambio(header) {

    if (!header) return;



    if (window.scrollY > 200) {
        header.classList.add("header-scroll");
        console.log(header);
    } else {
        header.classList.remove("header-scroll");
    }
}