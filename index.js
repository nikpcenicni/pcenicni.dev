function shownavmenu() {
    x.classList.toggle("change");
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var btn = document.querySelector("#darkmode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
} else {
    document.body.classList.toggle("dark-theme");
}
});
