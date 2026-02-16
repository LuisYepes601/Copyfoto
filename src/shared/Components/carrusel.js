export function crearCarrusel(categorias) {

    const container = document.createElement("div");
    container.className = "container-carrusel";

    let categoriasContainer = 2;

    while (categoriasContainer > 0) {
        const containerCatg = document.createElement("div");
        containerCatg.className = "categorias-carrusel";

        categorias.forEach(element => {
            const categoria = document.createElement("p");
            categoria.className = "item-carrusel";
            categoria.textContent = element.name;

            containerCatg.append(categoria);
        });

        container.append(containerCatg);

        categoriasContainer--;
    }


    return container;


}