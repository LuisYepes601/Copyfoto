import { createServicesEspecials } from "../Components/servicesPrincipalsCom.js"

import { dataServices } from "../Services/servicesPrincipals.js";

export function cargarServicesPricipals() {

    const main = document.querySelector(".main");

    if(!main )return;

    const services = createServicesEspecials(dataServices);

    main.append(services);


}