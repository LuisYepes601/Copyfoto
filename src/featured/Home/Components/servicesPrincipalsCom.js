import { crearBtnBasic } from "../../../shared/Components/btn-basic.js"

export function createServicesEspecials(services) {

    const servicesSection = document.createElement("section");
    servicesSection.classList.add("services-principales")

    const containerServices = document.createElement("div");
    containerServices.classList.add("container-services");

    const tituloContainer = document.createElement("h2");
    tituloContainer.textContent = "Nuestros Principales Servicios"
    tituloContainer.classList.add("titulo-section")

    services.forEach((element, index) => {

        const cardService = document.createElement("div");
        cardService.classList.add("card-service");

        cardService.addEventListener("click",()=>{
            window.location.href="sobreNosotros.html";
        })

        const title = document.createElement("p");
        title.classList.add("card-service-title");
        title.textContent = element.title;

        const imagen = document.createElement("img");
        imagen.classList.add("card-service-img");
        imagen.src = element.image;

        cardService.append(title, imagen);

        containerServices.append(cardService);
    });

    const btn = crearBtnBasic("Ver servicios");
    btn.addEventListener("click", () => {
        window.location.href = "sobreNosotros.html"
    })

    servicesSection.append(tituloContainer, containerServices, btn)




    return servicesSection;

}