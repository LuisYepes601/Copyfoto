
import { activeModeDark } from "../Utils/activeModeDark.js";
export function btnDark() {

    const btn = document.createElement("button");
    btn.classList.add("btn-dark");

    const icon = document.createElement("i");
    icon.classList.add("icon-dark");
    icon.classList.add("bi");
    icon.classList.add("bi-moon-stars-fill");

    btn.addEventListener("click", () => {
        activeModeDark();
    })

    btn.append(icon);

    return btn;


}