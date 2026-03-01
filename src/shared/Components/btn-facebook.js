export function btnFace() {

    const btn = document.createElement("a");
    btn.classList.add("btn-face");
    btn.href = "https://www.facebook.com/profile.php?id=61587762724688";
    btn.target="_∫blank"

    const icon = document.createElement("i");
    icon.classList.add("icon-face");
    icon.classList.add("bi-facebook");
    icon.classList.add("bi");

    btn.append(icon);
    return btn;
}