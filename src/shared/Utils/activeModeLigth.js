export function activeModeLigth() {

    document.body.classList.remove("dark");

    localStorage.setItem("stateMode", JSON.stringify({
        isDark: "false"
    }))

}