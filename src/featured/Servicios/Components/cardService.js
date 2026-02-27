import { crearModalDetalles } from "../Components/modalDetalles.js";

export function crearCardService(data) {
    const card = document.createElement("div");
    card.classList.add("card-service");
    card.addEventListener("click", () => {

        verDetalles(data);
    })

    const title = document.createElement("h3");
    title.classList.add("card-service-title");
    title.textContent = data.title;

    const cardServiceInfo = document.createElement("div");
    cardServiceInfo.classList.add("card-service-info");

    const img = document.createElement("img");
    img.classList.add("service-info-img");
    img.src = data.img;

    const precio = document.createElement("p");
    precio.classList.add("service-info-precio") - '`';
    precio.textContent = `${"Precio: " + "$"}` + data.precio;

    const btnVerdDetalles = document.createElement("button");
    btnVerdDetalles.classList.add("btn-verDetails");
    btnVerdDetalles.textContent = "Ver detalles";
    btnVerdDetalles.addEventListener("click", (e) => {
        e.stopPropagation();
        verDetalles(data);
    })

    const iconVerDetalles = document.createElement("i");
    iconVerDetalles.classList.add("bi");
    iconVerDetalles.classList.add("bi-eye-fill");
    iconVerDetalles.classList.add("icon-ver-details");


    btnVerdDetalles.append(iconVerDetalles);

    cardServiceInfo.append(img, precio);

    card.append(title, cardServiceInfo, btnVerdDetalles);




    return card;
}

function verDetalles(data) {


    const modal = crearModalDetalles(data);

    document.body.append(modal);
    document.body.classList.add("modal-detalles-open");

}


