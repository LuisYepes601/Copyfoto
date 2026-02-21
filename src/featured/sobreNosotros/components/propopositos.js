export function CrearPropositos(dataProp) {

    const container = document.createElement("div");
    container.classList.add("propositos");

    dataProp.forEach(element => {

        console.log(element.title);

        const proposito = document.createElement("div");
        proposito.classList.add("proposito");

        const titleProposito = document.createElement("h3");
        titleProposito.classList.add("prposito-title");
        titleProposito.textContent = element.title;

        const content = document.createElement("p");
        content.classList.add("proposito-content");
        content.textContent = element.content;

        proposito.append(titleProposito, content);

        container.append(proposito);
    });

    return container;

}