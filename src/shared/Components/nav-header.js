

export function crearNavHeader(urls) {


    const nav = document.createElement("nav");
    nav.classList.add("nav-header");

    const listaUrls = document.createElement("ul");
    listaUrls.classList.add("nav-lista");


    urls.forEach(element => {

        const liSobreNosotros = document.createElement("li");
        liSobreNosotros.className = "li-item";

        const url = document.createElement("a");
        url.textContent = element.nameBtn;
        url.className = "url-nav-header";
        url.href = element.url;

        liSobreNosotros.append(url);

        listaUrls.append(liSobreNosotros);

    });


    nav.append(listaUrls);

    return nav;

}





