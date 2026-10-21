function toggle_darkmode() {
    let t = document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("saved-theme", t);
    let change = localStorage.getItem("dark-mode") == "true"
    localStorage.setItem("dark-mode", !change)
}

function check_darkmode() {
    let element = document.body;
    let change = localStorage.getItem("dark-mode") == "true";

    if (change) {
        document.documentElement.setAttribute("saved-theme", "dark")
    } else {
        document.documentElement.setAttribute("saved-theme", "light")
    }
}