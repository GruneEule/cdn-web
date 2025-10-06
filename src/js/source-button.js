document.addEventListener("DOMContentLoaded", () => {
  const sourceBtn = document.getElementById("source-btn");
  if (!sourceBtn) return; // Abbrechen, falls Button nicht existiert

  let path = window.location.pathname;

  path = path.replace(/\/$/, "");

  sourceBtn.href = path + "/source";

  sourceBtn.title = "View source for this page on GitHub";

  sourceBtn.target = "_blank";
});
