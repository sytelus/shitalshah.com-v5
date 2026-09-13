/* =============================================================================
   Chain theme — chain.js
   Progressive enhancements only: every page works without this file.
   Sections: theme toggle · TOC · HUD · sidenotes · lightbox · code copy ·
             tweet embeds. Search lives in search.js, PDF in pdf-download.js.
   ============================================================================= */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const mqDark = matchMedia("(prefers-color-scheme: dark)");
  const mqDesktop = matchMedia("(min-width: 64em)");
  const mqWide = matchMedia("(min-width: 88em)");

  /* ---- Theme toggle -------------------------------------------------------- */
  const root = document.documentElement;
  const theme = () => root.dataset.theme || (mqDark.matches ? "dark" : "light");
  function paintTheme() {
    const dark = theme() === "dark";
    $$(".theme-toggle").forEach((b) => {
      b.textContent = dark ? "light" : "dark";
      b.setAttribute("aria-label", dark ? "Switch to light appearance" : "Switch to dark appearance");
      b.setAttribute("aria-pressed", String(dark));
    });
    const m = $('meta[name="theme-color"]');
    if (m) m.content = getComputedStyle(root).getPropertyValue("--paper").trim();
    $$(".giscus-frame").forEach((f) =>
      f.contentWindow.postMessage({ giscus: { setConfig: { theme: dark ? "dark_dimmed" : "light" } } }, "https://giscus.app")
    );
  }
  $$(".theme-toggle").forEach((b) =>
    b.addEventListener("click", () => {
      const next = theme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      paintTheme();
    })
  );
  mqDark.addEventListener("change", paintTheme);
  paintTheme();

  /* ---- Table of contents: collapse on narrow screens, track the reader ----- */
  const toc = $(".toc");
  if (toc) {
    const syncOpen = () => { toc.open = mqDesktop.matches; };
    syncOpen();
    mqDesktop.addEventListener("change", syncOpen);

    const pairs = $$(".toc nav a")
      .map((a) => [document.getElementById(decodeURIComponent(a.hash.slice(1))), a])
      .filter(([h]) => h);
    if (pairs.length) {
      let active = null;
      const setActive = (a) => {
        if (a === active) return;
        if (active) active.classList.remove("active");
        if (a) { a.classList.add("active"); if (mqDesktop.matches) a.scrollIntoView({ block: "nearest" }); }
        active = a;
      };
      const onScroll = () => {
        const line = innerHeight * 0.28;
        let cur = pairs[0][1];
        for (const [h, a] of pairs) { if (h.getBoundingClientRect().top <= line) cur = a; else break; }
        setActive(cur);
      };
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("resize", onScroll);
      onScroll();
    }
  }

  /* ---- HUD: reading progress ----------------------------------------------- */
  const hud = $(".hud");
  const body = $("#blog-content .prose");
  if (hud && body) {
    const txt = $(".txt", hud), bar = $(".bar", hud);
    const minutes = +hud.dataset.minutes || 0;
    const N = 10;
    const update = () => {
      const r = body.getBoundingClientRect();
      const total = r.height - innerHeight;
      const p = total <= 0 ? 1 : Math.min(1, Math.max(0, -r.top / total));
      const pct = Math.round(p * 100);
      hud.style.setProperty("--p", pct + "%");
      if (bar) bar.style.width = pct + "%";
      if (txt) {
        const filled = Math.round(p * N);
        const left = Math.max(0, Math.ceil(minutes * (1 - p)));
        txt.innerHTML =
          '<span class="blocks">' + "█".repeat(filled) + "░".repeat(N - filled) + "</span> <b>" + pct + "%</b>" +
          (minutes ? " · " + (left ? left + " min left" : "done") : "");
      }
      hud.classList.toggle("is-visible", r.top < -40 && r.bottom > innerHeight * 0.15);
    };
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    update();
  }

  /* ---- Sidenotes: footnotes float into the right margin on wide screens ---- */
  const fns = $(".footnotes");
  if (fns && document.body.dataset.sidenotes === "true") {
    $$(".footnote-ref").forEach((ref) => {
      const id = decodeURIComponent(ref.getAttribute("href").slice(1));
      const li = document.getElementById(id);
      if (!li) return;
      const aside = document.createElement("aside");
      aside.className = "sidenote";
      aside.id = "sn-" + id;
      aside.innerHTML = '<span class="sn-num">' + ref.textContent.trim() + "</span>" + li.innerHTML;
      // Float at the top of the block that holds the reference; several refs in
      // one block stack in reading order.
      const block = ref.closest("p, li, blockquote, h2, h3, h4, table, figure, pre") || ref.parentElement;
      const prev = block.previousElementSibling;
      if (prev && prev.classList.contains("sidenote") && prev.dataset.block === "next") aside.dataset.block = "next";
      if (block._lastNote) block._lastNote.insertAdjacentElement("afterend", aside);
      else block.insertAdjacentElement("beforebegin", aside);
      block._lastNote = aside;
      ref.addEventListener("mouseenter", () => aside.classList.add("is-active"));
      ref.addEventListener("mouseleave", () => aside.classList.remove("is-active"));
    });
    const sync = () => fns.classList.toggle("moved", mqWide.matches);
    sync();
    mqWide.addEventListener("change", sync);
  }

  /* ---- Lightbox for page images -------------------------------------------- */
  const zoomables = $$(".prose figure.zoomable img");
  if (zoomables.length && "HTMLDialogElement" in window) {
    const dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    dlg.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(dlg);
    const im = $("img", dlg), cap = $("figcaption", dlg);
    zoomables.forEach((img) =>
      img.addEventListener("click", () => {
        im.src = img.dataset.full || img.currentSrc || img.src;
        im.alt = img.alt;
        const fc = img.closest("figure").querySelector("figcaption");
        cap.textContent = fc ? fc.textContent : img.alt || "";
        dlg.showModal();
      })
    );
    dlg.addEventListener("click", () => dlg.close());
  }

  /* ---- Copy button on code blocks ------------------------------------------ */
  $$("figure.code .copy").forEach((btn) =>
    btn.addEventListener("click", async () => {
      const fig = btn.closest("figure");
      const code = $(".lntd:last-child code", fig) || $("pre code", fig) || $("pre", fig);
      const text = code.innerText.replace(/\n$/, "");
      try { await navigator.clipboard.writeText(text); }
      catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
      }
      const old = btn.textContent;
      btn.textContent = "copied"; btn.classList.add("done");
      setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1600);
    })
  );

  /* ---- Tweet embeds: one widgets.js for the whole page, theme aware -------- */
  const tweets = $$("blockquote.twitter-tweet");
  if (tweets.length) {
    if (theme() === "dark") tweets.forEach((t) => t.setAttribute("data-theme", "dark"));
    const load = () => {
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js"; s.async = true; s.charset = "utf-8";
      document.head.appendChild(s);
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => {
        if (es.some((e) => e.isIntersecting)) { io.disconnect(); load(); }
      }, { rootMargin: "600px" });
      tweets.forEach((t) => io.observe(t));
    } else load();
  }
})();
