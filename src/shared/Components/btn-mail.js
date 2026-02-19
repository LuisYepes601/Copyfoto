
export function btnMail() {

    const btn = document.createElement("a");
    btn.classList.add("btn-mail");
    btn.href = "mailto:fotosanjacinto@gmail.com"

    const iconMail = document.createElement("i");
    iconMail.className = "bi bi-envelope icon-mail";

    btn.append(iconMail);
    return btn;

}