const lang = (navigator.language || navigator.userLanguage || "en").split(
  "-"
)[0];
const bannerShown = localStorage.getItem("de_banner_shown");

if (lang === "de" && !bannerShown) {
  const banner = document.createElement("div");
  banner.className = "language-banner";
  banner.innerHTML = `
      <div class="language-banner-content">
        <div class="language-banner-icon">🌍</div>
        <div class="language-banner-text">
          Möchtest du die deutsche Version der Webseite sehen?
        </div>
      </div>
      <div class="language-banner-actions">
        <button id="switchToDe" class="language-banner-btn">Ja, bitte</button>
        <button id="closeBanner" class="language-banner-close" aria-label="Schließen">✕</button>
      </div>
    `;
  document.body.appendChild(banner);

  // Klick auf "Ja, bitte"
  document.getElementById("switchToDe").onclick = function (e) {
    e.preventDefault();
    let path = location.pathname;

    // Prüfen, ob path schon ein Präfix hat
    if (path.startsWith("/en/")) {
      path = path.replace(/^\/en/, ""); // entferne /en
    } else if (path.startsWith("/de/")) {
      path = path.replace(/^\/de/, ""); // optional, falls falscher Präfix
    }

    // redirect auf deutsche Version
    location.href = "/de" + path + location.search + location.hash;
  };

  document.getElementById("closeBanner").onclick = () => {
    banner.style.animation = "slideUpBanner 0.5s ease-out reverse forwards";
    setTimeout(() => {
      banner.remove();
    }, 500);
    localStorage.setItem("de_banner_shown", "1");
  };
}
