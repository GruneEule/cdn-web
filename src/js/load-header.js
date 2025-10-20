window.addEventListener("DOMContentLoaded", () => {
    fetch("https://cdn.grueneeule.de/templates/header/grueneeule-web/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
});

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://cdn.grueneeule.de/templates/header/grueneeule-web/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-en-container").innerHTML = data;
        });
});

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://cdn.grueneeule.de/templates/header/grueneeule-web/header-dev.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-dev-container").innerHTML = data;
        });
});

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://cdn.grueneeule.de/templates/header/toollab-web/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-toollab-container").innerHTML = data;
        });
});