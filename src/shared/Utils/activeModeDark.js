
export function activeModeDark() {

    document.body.classList.add("dark");

    localStorage.setItem("stateMode", JSON.stringify({
        isDark: "true"
    }))

}



