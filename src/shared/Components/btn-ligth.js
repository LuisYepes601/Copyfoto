import { activeModeLigth } from "../Utils/activeModeLigth.js";

export function btnLigth() {

    const btn = document.createElement("button");
    btn.classList.add("btn-ligth");

    const icon = document.createElement("i")
    icon.classList.add("icon-ligth");
    icon.classList.add("bi");
    icon.classList.add("bi-sun-fill");

    btn.addEventListener("click", () => {
        activeModeLigth();
    })
    btn.append(icon);

    return btn;
}