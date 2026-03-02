
export function gestionStateMode() {

     localStorage.setItem("stateMode", JSON.stringify({
        isDark: "false"
    }))

    const stateMode = JSON.parse(localStorage.getItem("stateMode"));



    if (stateMode.isDark === "true") {
        document.body.classList.add("dark");
    }

}