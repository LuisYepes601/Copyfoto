
function crearCardService(data) {
    const card = document.createElement("div");
    card.classList.add("card-service");

    const title = document.createElement("h2");
    title.classList.add("card-service-title");
    title.textContent = data.title;

    const cardServiceInfo = document.createElement("div");
    cardServiceInfo.classList.add("card-service-info");

    const img = document.createElement("img");
    img.classList.add("service-info-img");
    img.textContent = data.img;
    

    cardServiceInfo.append(img);

    card.append(title, cardServiceInfo);

    return card;
}


