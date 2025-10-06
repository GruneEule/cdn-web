// source-button.js
const observer = new MutationObserver((mutations, obs) => {
    const btn = document.getElementById("source-btn");
    if (btn) {
        let path = window.location.pathname.replace(/\/$/, "");
        path = path.replace(/\/index$/, ""); // /index entfernen
        btn.href = path + "/source";
        btn.title = "View source for this page on GitHub";
        btn.target = "_blank";
        obs.disconnect(); // Observer stoppen
    }
});

// Auf gesamten Body achten, inklusive dynamischer Inhalte
observer.observe(document.body, { childList: true, subtree: true });
