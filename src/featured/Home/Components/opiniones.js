import { crearCardOpinion } from "../../../shared/Components/card-opinion.js";

export function crearSeccionOpinions(opinions) {

    const opinionessection = document.createElement("section");
    opinionessection.classList.add("opinions-sec");

    const constainerOpinions = document.createElement("div");
    constainerOpinions.classList.add("container-opinions")

    const titulo = document.createElement("h2");
    titulo.classList.add("opinions-sec-title")
    titulo.textContent="Calificaciones"

    opinions.forEach(element => {


        const card = crearCardOpinion(element);


        constainerOpinions.append(card);



    });

    opinionessection.append(titulo, constainerOpinions)

    return opinionessection;

}
