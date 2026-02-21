export function historia(historiaData) {

    const historia = document.createElement("div");
    historia.classList.add("history");

    const titulo = document.createElement("h2");
    titulo.classList.add("history-title");
    titulo.textContent = "Historia y Experiencia."

    const infoPrincipal = document.createElement("div");
    infoPrincipal.classList.add("history-main");

    const fechaCreacion = document.createElement("h3");
    fechaCreacion.classList.add("history-main-title");
    fechaCreacion.textContent = "Fecha de Creación: " + historiaData.fechaCreacion;

    const contenido = document.createElement("p");
    contenido.classList.add("history-main-content")
    contenido.textContent = historiaData.content;

    infoPrincipal.append(fechaCreacion, contenido);

    historia.append(titulo, infoPrincipal);

    return historia;



}