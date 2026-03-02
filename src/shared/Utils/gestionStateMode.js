
export function gestionStateMode() {

    const stateMode = JSON.parse(localStorage.getItem("stateMode"));

    if (!stateMode)return;

    if (stateMode.isDark === "true") {
        document.body.classList.add("dark");
    }

}