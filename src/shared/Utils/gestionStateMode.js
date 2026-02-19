
export function gestionStateMode() {

    const stateMode = JSON.parse(localStorage.getItem("stateMode"));

    console.log(stateMode);


    if (stateMode.isDark === "true") {
        document.body.classList.add("dark");
    }

}