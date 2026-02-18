import { crearSeccionOpinions } from "../Components/opiniones.js";
import { dataOpinions } from "../Services/opiniones.js";

export function cargarOpiniones() {

    const main = document.querySelector(".main");

    if (!main) return;


    const opiniones = crearSeccionOpinions(dataOpinions);


    main.append(opiniones);



}