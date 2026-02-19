export function btnFace() {

    const btn = document.createElement("a");
    btn.classList.add("btn-face");
    btn.href = "https://www.facebook.com/luis.yepesmelendez/"

    const icon = document.createElement("i");
    icon.classList.add("icon-face");
    icon.classList.add("bi-facebook");
    icon.classList.add("bi");

    btn.append(icon);
    return btn;
}