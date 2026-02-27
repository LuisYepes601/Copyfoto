
export function crearModalDetalles(data) {

    const modal = document.createElement("div");
    modal.classList.add("mod-detalles");

    modal.textContent = "";

    const btnclose = document.createElement("button");

    btnclose.classList.add("modal-detalles-btn-close");

    const iconClose = document.createElement("i");
    iconClose.classList.add("bi");
    iconClose.classList.add("bi-x-circle-fill");
    iconClose.classList.add("iconClose");

    btnclose.append(iconClose);

    btnclose.addEventListener("click", () => {
        modal.classList.add("close");
        document.body.classList.remove("modal-detalles-open");
    })


    const modalInfoMain = document.createElement("div");
    modalInfoMain.classList.add("mod-detalles-info");

    const name = document.createElement("h3");
    name.classList.add("mod-detalles-title");
    name.textContent = data.title;

    const descripcion = document.createElement("p");
    descripcion.classList.add("mod-detalles-descripcion")
    descripcion.textContent = data.descripcion;

    const imgService = document.createElement("img");
    imgService.classList.add("mod-detalles-img");
    imgService.src = data.img;

    const tipoService = document.createElement("p");
    tipoService.classList.add("tipo-service");
    tipoService.textContent = `${"Tipo de Servicio: " + data.tipoService}`;

    const categoriaColor = document.createElement("p");
    categoriaColor.classList.add("categoria-color");

    if (data.category === "B/N") {
        categoriaColor.textContent = `${"Tipo de Impresion-Fotocopia:  " + "Blanco y Negro"}`
    } else {
        categoriaColor.textContent = `${"Tipo de Impresion-Fotocopia:  " + "Color"}`
    }

    const precio = document.createElement("p");
    precio.classList.add("mod-detalles-precio");
    precio.textContent = `${"$ " + data.precio}`;

    modalInfoMain.append(name, descripcion, imgService, tipoService, categoriaColor, precio);

    modal.append(btnclose, modalInfoMain);
    return modal;
}