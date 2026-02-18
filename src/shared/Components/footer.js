export function crearFooter(servicios, enlaces) {

    const containe = document.createElement("div");
    containe.classList.add("footer-container");

    const descripcion = document.createElement("div");
    descripcion.classList.add("footer-descripcion");

    const titleDescripcion = document.createElement("h2");
    titleDescripcion.classList.add("footer-descripcion-title");
    titleDescripcion.textContent="Información de Contacto "

    const logo = document.createElement("img");
    logo.classList.add("footer-logo");
    logo.src = "assets/logos/LogoRedondo.png";

    const serviciosContainer = document.createElement("div");
    serviciosContainer.classList.add("footer-servicios");

    const titleServices = document.createElement("h2");
    titleServices.classList.add("servicios-titulo-footer");
    titleServices.textContent = "Servicios Principales"

    serviciosContainer.append(titleServices)

    servicios.forEach(element => {

        const servicio = document.createElement("a");
        servicio.textContent = element.title;
        servicio.classList.add("service-item");

        serviciosContainer.append(servicio);

    });

    const enlacesRapidos = document.createElement("div");
    enlacesRapidos.classList.add("enlaces-rapidos");

    enlaces.forEach(element => {

        const enlace = document.createElement("a");
        enlace.classList.add("enlaces-rapidos-footer");
        enlace.textContent = element.nameBtn;
        enlace.href = element.url;

        enlacesRapidos.append(enlace);

    });

    const contactoFooter = document.createElement("div");
    contactoFooter.classList.add("footer-contacto");

    const title = document.createElement("h2");
    title.classList.add("footer-title");
    title.textContent = "Contactanos";

    const direccion = document.createElement("div");
    direccion.classList.add("footer-dir")

    const city = document.createElement("p");
    city.classList.add("footer-dir-city");
    city.textContent = "Ciudad/Municipio: San Jacinto Bolívar"

    const barrio = document.createElement("p");
    barrio.classList.add("footer-dir-barrio");
    barrio.textContent = "Barrio: Centro"

    const calle = document.createElement("p");
    calle.classList.add("footer-dir-calle");
    calle.textContent = "Calle: 20 # 40-20";

    const wapsap = document.createElement("a");
    wapsap.classList.add("footer-dir-wpp");
    wapsap.href = "https://wa.me/573008998311";
    wapsap.target = "_blank";
    wapsap.textContent = "3008998311"

    const logoWpp = document.createElement("i");
    logoWpp.className = "bi bi-whatsapp logWpp";

    const correo = document.createElement("a");
    correo.classList.add("footer-dir-email")
    correo.href = "mailto:fotosanjacinto@gmail.com"
    correo.textContent="fotosanjacinto@gmail.com"

    const logoCorreo = document.createElement("i");
    logoCorreo.className = "bi bi-envelope logMail";

    const Horarios = document.createElement("div");
    Horarios.classList.add("footer-horarios");


    correo.append(logoCorreo);

    wapsap.append(logoWpp);


    direccion.append(city, barrio, calle, wapsap, correo);

    contactoFooter.append(title, direccion, Horarios);

    descripcion.append(titleDescripcion,logo);

    containe.append(descripcion, serviciosContainer, enlacesRapidos, contactoFooter);



    return containe;

}