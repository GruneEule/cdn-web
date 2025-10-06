// source-button.js

// MutationObserver prüfen das DOM auf Änderungen
const observer = new MutationObserver(() => {
    const btn = document.getElementById("source-btn");
    if (btn) {
        // Pfad der aktuellen Seite ermitteln
        let path = window.location.pathname.replace(/\/$/, "");

        // /index automatisch entfernen
        path = path.replace(/\/index$/, "");

        // href setzen
        btn.href = path + "/source";
        btn.title = "View source for this page on GitHub";
        btn.target = "_blank";

        // Observer kann stoppen
        observer.disconnect();
    }
});

// Start beobachten: body nach Änderungen prüfen
observer.observe(document.body, { childList: true, subtree: true });
