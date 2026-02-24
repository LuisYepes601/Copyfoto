import {  crearCardService} from "../Components/cardService.js";

export function crearSeccionServicios(serviciosData) {
    
    const services = document.createElement("section");
    services.classList.add("services");

    const titulo = document.createElement("h2");
    titulo.classList.add("services-title");
    titulo.textContent="Nuestros Servicios.";

    const containerServices = document.createElement("div");
    containerServices.classList.add("containerServices");


    serviciosData.forEach(element => {
        
        const servicio = crearCardService(element);

        containerServices.append(servicio);
    });


    services.append(titulo, containerServices);

    return services;
}