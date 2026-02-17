

export function crearNavHeader(urls) {


    const nav = document.createElement("nav");
    nav.classList.add("nav-header");

    const listaUrls = document.createElement("ul");
    listaUrls.classList.add("nav-lista");


    urls.forEach((element, index) => {

        const liSobreNosotros = document.createElement("li");
        liSobreNosotros.className = "li-item";

        const url = document.createElement("a");
        url.textContent = element.nameBtn;
        url.className = "url-nav-header";
        url.href = element.url;
        url.addEventListener("click", () => mostrarUrlSeleccionada)
        liSobreNosotros.append(url);

        listaUrls.append(liSobreNosotros);



    });


    nav.append(listaUrls);

    return nav;

}

function mostrarUrlSeleccionada() {

    const urls = document.querySelectorAll(".url-nav-header");


    document.addEventListener("DOMContentLoaded", () => {

        urls.forEach(element => {

            console.log(element);


        });
    })




}






