import { crearSeccionServicios } from "../Components/seccionServices.js";
import { getServicios } from "../Services/serviciosData.js";
export function cargarServicios() {

    const main = document.querySelector(".main");

    if (!main) return;

    const container = crearSeccionServicios(getServicios);

    main.append(container);



}