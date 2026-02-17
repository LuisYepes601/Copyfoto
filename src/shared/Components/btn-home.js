export function crearBtnHome() {

    const btn = document.createElement("a");
    btn.classList.add("btn-home");
    btn.href = "index.html"

    const iconhome = document.createElement("img");
    iconhome.classList.add("icon-home");
    iconhome.src = "assets/icons/house-regular.png";

    btn.append(iconhome);

    return btn;


}