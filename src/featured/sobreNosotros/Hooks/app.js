import { historia } from "../components/historia.js";
import { Gethistoria } from "../Service/history.js";
import { propositos } from "../Service/dataPrposites.js";
import { CrearPropositos } from "../components/propopositos.js";
import { getValores } from "../Service/dataValores.js";
import { crearValores } from "../components/CompValores.js";


export function cargarHistory() {

    const main = document.querySelector(".main");

    if (!main) return;

    const container = historia(Gethistoria);

    main.append(container);

}

export function cargarPropositos() {

    const main = document.querySelector(".main");

    if (!main) return;

    const container = CrearPropositos(propositos);

    main.append(container);


}

export function cargarValores() {


    const main = document.querySelector(".main");

    if (!main) return;
    
    const container = crearValores(getValores);

    main.append(container);

}