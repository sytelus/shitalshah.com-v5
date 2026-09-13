/* =============================================================================
   Chain theme — pdf-download.js
   "pdf ↓" link on articles: renders #blog-content to a PDF in the browser with
   html2pdf.js (loaded from cdnjs only when clicked). Elements carrying the
   class "print:hidden" are left out, matching the @media print stylesheet.
   ============================================================================= */
(() => {
  "use strict";
  const link = document.querySelector(".pdf-link");
  if (!link) return;
  const LIB = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js";
  const filename = link.dataset.pdfFilename || document.title.replace(/[^\w.-]+/g, "-") + ".pdf";

  function loadScript(url, cb) {
    const s = document.createElement("script");
    s.src = url; s.onload = cb;
    s.onerror = () => { link.textContent = "pdf failed"; console.error("Failed to load", url); };
    document.head.appendChild(s);
  }
  function generate() {
    const el = document.getElementById("blog-content");
    if (!el) return;
    const opt = {
      margin: 0.5,
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        ignoreElements: (e) => e.classList && e.classList.contains("print:hidden"),
      },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(el).save().then(() => { link.textContent = link.dataset.label; });
  }
  link.dataset.label = link.textContent;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.textContent = "rendering…";
    typeof html2pdf === "undefined" ? loadScript(LIB, generate) : generate();
  });
})();
