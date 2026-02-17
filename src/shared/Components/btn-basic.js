export function crearBtnBasic(name) {

    const btn = document.createElement("button");
    btn.classList.add("btn-basic");
    btn.textContent = name;

    return btn;
}