export function crearValores(valores) {

    const container = document.createElement("div");
    container.classList.add("valores-section");

    const title = document.createElement("h2");
    title.textContent = "Nuestros Valores."
    title.classList.add("valores-title");

    const containervalores = document.createElement("div");
    containervalores.classList.add("valores");

    valores.forEach(element => {        

        const valor = document.createElement("p");
        valor.textContent = element.content;
        valor.classList.add("valor");

        containervalores.append(valor);


    });

    container.append(title, containervalores);

    return container;
}