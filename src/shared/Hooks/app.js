import { cargarLogo } from "../Components/logo-header.js"
import { crearNavHeader } from "../Components/nav-header.js";
import { obtnerEnlaces } from "../Services/nav-header.js"
import { crearCarrusel } from "../Components/carrusel.js"
import { categorias } from "../Services/Categogrias-carrusel.js"
import { btnBurguer } from "../Components/burguerBtn.js"

export function cargarLogoHome() {

    const header = document.querySelector(".header");

    if (!header) return;

    const logo = cargarLogo();

    header.append(logo);
}

export function cargarNavHeader() {

    const header = document.querySelector(".header");


    if (!header) return;

    const enlances = obtnerEnlaces();


    const nav = crearNavHeader(enlances);

    header.append(nav);
}

export function CargarCarrusel() {

    const carrusel = document.querySelector(".carrusel");

    const content = crearCarrusel(categorias);


    carrusel.append(content);
}

export function cargarBtnBurguer() {

    const header = document.querySelector(".header");

    if (!header) return;

    const btn = btnBurguer();

    header.append(btn);
}