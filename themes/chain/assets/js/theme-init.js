/* Inlined in <head> before the stylesheet so there is no flash of the wrong
   theme. Only an explicit visitor choice is stored; otherwise the OS decides
   through prefers-color-scheme in CSS. */
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
