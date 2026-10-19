function toggle_darkmode() {
    let element = document.body;
    let change = localStorage.getItem("dark-mode") == "true";

    if (!change) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    };

    localStorage.setItem("dark-mode", !change);
}

function check_darkmode() {
    let element = document.body;
    let change = localStorage.getItem("dark-mode") == "true";

    if (change) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
}