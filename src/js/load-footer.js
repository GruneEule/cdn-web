window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/footer/grueneeule-web/de/footer.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-de-container").innerHTML = data;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.grueneeule.de/templates/footer/grueneeule-web/en/footer.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-en-container").innerHTML = data;
    });
});
