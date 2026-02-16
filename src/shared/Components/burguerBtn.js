export function btnBurguer() {

    const btnBurguer = document.createElement("a");
    btnBurguer.className = "btn-burguer";

    const iconBtn = document.createElement("img");
    iconBtn.className = "icon-burguer";
    iconBtn.src = "assets/icons/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"

    btnBurguer.append(iconBtn);

    btnBurguer.addEventListener("click", () => manejarNav())

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {
            const nav = document.querySelector(".nav-header");

            if (!nav) return;

            nav.classList.remove("open")
        }

    })

    return btnBurguer;

}

function manejarNav() {

    const nav = document.querySelector(".nav-header");

    if (!nav) return;

    nav.classList.toggle("open");

}