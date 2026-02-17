export function CreatePorqueElegirnos(caracteristicas) {


    const containerSection = document.createElement("section");
    containerSection.classList.add("elegirnos");

    const containerMain = document.createElement("div");
    containerMain.classList.add("elegirnos-main")

    const imgPresentacion = document.createElement("img");
    imgPresentacion.classList.add("elegirnos-img");
    imgPresentacion.src = "assets/images/porqueNosotros.png"

    const tituloSection = document.createElement("h2");
    tituloSection.classList.add("elegirnos-title");
    tituloSection.textContent = "¿Por qué elegirnos?"

    const lista = document.createElement("ul");
    lista.classList.add("elegirnos-lista");

    caracteristicas.forEach(element => {

        const item = document.createElement("li");
        item.classList.add("elegirnos-item");
        item.textContent = element.name;

        lista.append(item);

    });

    containerMain.append(tituloSection, lista)

    containerSection.append(containerMain, imgPresentacion);

    return containerSection;

}