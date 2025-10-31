window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/grueneeule-web/de/header.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-de-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/grueneeule-web/en/header.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-en-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/grueneeule-web/de/header-dev.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-dev-de-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/grueneeule-web/en/header-dev.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-dev-en-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/grueneeule-web/de/header-gaming.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-gaming-de-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/grueneeule-web/en/header-gaming.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-gaming-en-container").innerHTML = data;
    });
});
