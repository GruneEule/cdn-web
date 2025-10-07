const userLang = (navigator.language || navigator.userLanguage || "en").split(
  "-"
)[0];
const bannerShown = localStorage.getItem("language_banner_shown");

// Prüfen, ob Banner schon angezeigt wurde
if (!bannerShown) {
  let currentLang = "en"; // default
  let targetLang = "de"; // default
  let bannerText = "Möchtest du die deutsche Version der Webseite sehen?";

  // Prüfen aktueller URL-Präfix
  if (location.pathname.startsWith("/de/")) {
    currentLang = "de";
    targetLang = "en";
    bannerText = "Do you want to switch to the English version of the website?";
  } else if (location.pathname.startsWith("/en/")) {
    currentLang = "en";
    targetLang = "de";
    bannerText = "Möchtest du die deutsche Version der Webseite sehen?";
  } else if (userLang === "de") {
    // Root / → DE Banner
    targetLang = "de";
    bannerText = "Möchtest du die deutsche Version der Webseite sehen?";
  }

  // Banner nur anzeigen, wenn Nutzer eine andere Sprache als aktuell hat
  if (currentLang !== targetLang) {
    const banner = document.createElement("div");
    banner.className = "language-banner";
    banner.innerHTML = `
      <div class="language-banner-content">
        <div class="language-banner-icon">🌍</div>
        <div class="language-banner-text">${bannerText}</div>
      </div>
      <div class="language-banner-actions">
        <button id="switchLang" class="language-banner-btn">Ja, bitte</button>
        <button id="closeBanner" class="language-banner-close" aria-label="Schließen">✕</button>
      </div>
    `;
    document.body.appendChild(banner);

    // Klick auf "Ja, bitte" → wechselt Sprachpräfix
    document.getElementById("switchLang").onclick = function (e) {
      e.preventDefault();
      let path = location.pathname;

      // aktuellen Präfix entfernen
      if (path.startsWith("/en/")) path = path.replace(/^\/en/, "");
      if (path.startsWith("/de/")) path = path.replace(/^\/de/, "");

      location.href = "/" + targetLang + path + location.search + location.hash;
    };

    // Banner schließen
    document.getElementById("closeBanner").onclick = () => {
      banner.style.animation = "slideUpBanner 0.5s ease-out reverse forwards";
      setTimeout(() => banner.remove(), 500);
      localStorage.setItem("language_banner_shown", "1");
    };
  }
}
