export function btnWpp() {

    const btnWpp = document.createElement("a");
    btnWpp.classList.add("btn-wpp");
    btnWpp.href = "https://wa.me/573008998311";
    btnWpp.target = "_blank";

    const iconWpp = document.createElement("i");
    iconWpp.classList.add("icon-wpp");
    iconWpp.classList.add("bi");
    iconWpp.classList.add("bi-whatsapp");

    btnWpp.appendChild(iconWpp);

    return btnWpp;

} 