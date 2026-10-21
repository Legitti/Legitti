(function () {
  var KEY = "legitti-theme";
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    if (!btn) return;
    var dark = theme === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.removeAttribute("title");
    btn.removeAttribute("aria-label");
  }

  var stored = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch (e) {
    stored = null;
  }
  apply(stored === "dark" ? "dark" : stored === "light" ? "light" : current());

  if (!btn) return;
  var showAfter = 80;
  function onScroll() {
    if (window.scrollY > showAfter) btn.classList.add("is-visible");
    else btn.classList.remove("is-visible");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {}
    apply(next);
  });
})();
