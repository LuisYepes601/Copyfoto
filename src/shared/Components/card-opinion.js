
import { crearStar } from "../Components/star-calf.js";

export function crearCardOpinion(dataCard) {


    const card = document.createElement("div");
    card.classList.add("card-opinon");

    const infoPersonal = document.createElement("div");
    infoPersonal.classList.add("card-opinion-info-per")

    const name = document.createElement("p");
    name.classList.add("info-personal-name");
    name.textContent = dataCard.name;

    const lastName = document.createElement("p");
    lastName.classList.add("info-personal-lastname");
    lastName.textContent = dataCard.lastName;

    const calificacionContainer = document.createElement("div");
    calificacionContainer.classList.add("calfContainer");

    const rate = document.createElement("div");
    rate.classList.add("rate");

    const contador = Number(dataCard.stars);




    for (let index = 0; index < contador; index++) {

        const star = crearStar();

        rate.append(star);

    }


    const mensaje = document.createElement("p");
    mensaje.classList.add("calfContainer-mensaje")
    mensaje.textContent = dataCard.mensaje;

    calificacionContainer.append(rate, mensaje)

    infoPersonal.append(name, lastName);

    card.append(infoPersonal, calificacionContainer);


    return card;

}