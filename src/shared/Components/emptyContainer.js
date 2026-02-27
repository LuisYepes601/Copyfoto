export function containerEmpty() {

    const container = document.createElement("div");
    container.classList.add("container-empty");

    return container;
}

export function renderContainerEmpty(container, mensaje) {


    container.innerHTML = "";

    const info = document.createElement("p");
    info.textContent = mensaje;
    info.classList.add("container-empty-mensaje");

    container.append(info);
}