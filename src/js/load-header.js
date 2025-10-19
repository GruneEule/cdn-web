window.addEventListener("DOMContentLoaded", () => {
    fetch("https://grueneeule.de/assets/templates/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
});

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://grueneeule.de/assets/templates/en/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-en-container").innerHTML = data;
        });
});

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://grueneeule.de/assets/templates/header-dev.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-dev-container").innerHTML = data;
        });
});

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://twfee.grueneeule.de/assets/templates/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-twfee-container").innerHTML = data;
        });
});