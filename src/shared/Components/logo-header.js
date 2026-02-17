export function cargarLogo() {

    const urlHome = document.createElement("a");
    urlHome.classList.add("url-home");
    urlHome.href = "index.html"

    const logo = document.createElement("img");
    logo.src = "assets/logos/LogoRedondo.png"
    logo.classList.add("header-logo");

    urlHome.appendChild(logo);
    return urlHome;



}