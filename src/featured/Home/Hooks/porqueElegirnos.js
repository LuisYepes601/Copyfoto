import { CreatePorqueElegirnos } from "../Components/porqueElegirnos.js";

import { GetCaracteristicas } from "../Services/seccionElegirnos.js"

export function cargarCaracteristicas() {

    const main = document.querySelector(".main")
    if (!main) return;

    const section = CreatePorqueElegirnos(GetCaracteristicas);

    main.append(section)

}