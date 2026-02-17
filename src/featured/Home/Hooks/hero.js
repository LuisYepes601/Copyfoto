import { heroHomeObj } from "../Services/heroHome.js"
import { crearHero } from "../../../shared/Components/hero.js"

export function cargarHero() {

    const main = document.querySelector(".main");

    if (!main) return;

    const hero = crearHero(heroHomeObj);

    main.append(hero);

}