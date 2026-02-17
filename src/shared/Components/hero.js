export function crearHero(data) {

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const containerInfoPrincipal = document.createElement("div")
    containerInfoPrincipal.classList.add("hero-info-main");

    const titulo = document.createElement("h1");
    titulo.classList.add("hero-title");
    titulo.textContent = data.title;

    const susbtitle = document.createElement("h3");
    susbtitle.classList.add("hero-subtitle");
    susbtitle.textContent = data.subtitle;

    const containerImg = document.createElement("div");
    containerImg.classList.add("hero-visual");

    const heroImg = document.createElement("img");
    heroImg.classList.add("hero-img");
    heroImg.src=data.image;

    containerImg.append(heroImg)

    containerInfoPrincipal.append(titulo, susbtitle);
    

    hero.append(containerInfoPrincipal, containerImg)

    return hero;


}