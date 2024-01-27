(function () {
  "use strict";
  var prefersLightTheme;
  function setTheme() {
    if (prefersLightTheme.matches) {
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }
  if (typeof matchMedia === "function") {
    prefersLightTheme = matchMedia("(prefers-color-scheme:light)");
    prefersLightTheme.addEventListener("change", setTheme);
    setTheme();
  }
})();
