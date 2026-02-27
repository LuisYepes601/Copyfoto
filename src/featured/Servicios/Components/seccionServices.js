import { crearCardService } from "../Components/cardService.js";
import { crearFiltrosServicios } from "../Components/filtrosServiciosComp.js";
import { containerEmpty, renderContainerEmpty } from "../../../shared/Components/emptyContainer.js";

export function crearSeccionServicios(serviciosData) {

    const services = document.createElement("section");
    services.classList.add("services");

    const titulo = document.createElement("h2");
    titulo.classList.add("services-title");
    titulo.textContent = "Nuestros Servicios.";

    const containerServices = document.createElement("div");
    containerServices.classList.add("containerServices");

    const containerFilters = crearFiltrosServicios(serviciosData, containerServices);

    renderizarServices(containerServices, serviciosData);

    const containerVacio = containerEmpty();

    renderContainerEmpty(containerVacio, "No hay servicios que mostrar..");

    services.append(titulo, containerFilters, containerServices, containerVacio);


    return services;
}

export function renderizarServices(containerServices, serviciosData) {

    containerServices.innerHTML = "";

    if (serviciosData.length === 0) {

        const con = document.querySelector(".container-empty");

        con.classList.add("active");


    } else {
        const con = document.querySelector(".container-empty");

        if (con) {
            con.classList.remove("active");
        }

    }


    serviciosData.forEach(element => {


        const servicio = crearCardService(element);

        containerServices.append(servicio);
    });





}