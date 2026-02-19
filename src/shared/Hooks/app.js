import { cargarLogo } from "../Components/logo-header.js"
import { crearNavHeader } from "../Components/nav-header.js";
import { obtnerEnlaces } from "../Services/nav-header.js"
import { crearCarrusel } from "../Components/carrusel.js"
import { categorias } from "../Services/Categogrias-carrusel.js"
import { btnBurguer } from "../Components/burguerBtn.js"
import { crearBtnHome } from "../Components/btn-home.js"
import { crearFooter } from "../Components/footer.js";
import { dataServices } from "../../featured/Home/Services/servicesPrincipals.js";
import { btnWpp } from "../Components/btn-wpp.js";
import { btnMail } from "../Components/btn-mail.js";
import { btnLigth } from "../Components/btn-ligth.js";
import {  btnDark } from "../Components/btn-dark.js";
import { btnFace } from "../Components/btn-facebook.js";


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

export function cargarBtnHome() {
    const header = document.querySelector(".header");

    if (!header) return;

    const btn = crearBtnHome();

    header.append(btn);
}

export function CargarFooter() {

    const footer = document.querySelector(".footer");

    if (!footer) return;

    const conatiner = crearFooter(dataServices, obtnerEnlaces());

    footer.append(conatiner);

}

export function cargarBtnWppFlotant() {


    const btn = btnWpp();

    document.body.append(btn);

}

export function cargarBtnMailFlotante() {

    const btn = btnMail();

    document.body.append(btn);
}

export function caragarBtnFacebookc() {


    const btn = btnFace();

    document.body.append(btn);

}

export function caragarBtnLigth() {


    const btn = btnLigth();

    document.body.append(btn);

}

export function cargarDark() {


    const btn = btnDark();

    document.body.append(btn);

}


