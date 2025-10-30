window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/de/grueneeule-web/header.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-de-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/en/grueneeule-web/header.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-en-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/de/grueneeule-web/header-dev.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-dev-de-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/header/en/grueneeule-web/header-dev.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-dev-en-container").innerHTML = data;
    });
});
