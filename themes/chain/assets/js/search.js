/* =============================================================================
   Chain theme — search.js
   Client-side search over /index.json with Fuse.js. Opens with "/" or ⌘/Ctrl+K,
   or the "search" button. The index is fetched on first open, never before.
   ============================================================================= */
(() => {
  "use strict";
  const dlg = document.getElementById("search");
  if (!dlg || !("HTMLDialogElement" in window)) return;
  const input = document.getElementById("search-input");
  const list = document.getElementById("search-results");
  const status = document.getElementById("search-status");
  let fuse = null, items = [], loading = false;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const idle = () => (status.textContent = items.length + " pages indexed · type to search · ↑ ↓ to move · ↵ to open");

  async function ensureIndex() {
    if (fuse || loading) return;
    loading = true;
    status.textContent = "loading index…";
    try {
      const res = await fetch(dlg.dataset.index, { cache: "force-cache" });
      items = await res.json();
      fuse = new Fuse(items, {
        keys: [
          { name: "title", weight: 0.7 },
          { name: "tags", weight: 0.3 },
          { name: "summary", weight: 0.4 },
          { name: "content", weight: 0.25 },
        ],
        ignoreLocation: true, threshold: 0.3, minMatchCharLength: 2,
      });
      idle();
      if (input.value) run(input.value);
    } catch (e) {
      status.textContent = "the search index could not be loaded";
    }
    loading = false;
  }
  function open() { ensureIndex(); if (!dlg.open) dlg.showModal(); input.focus(); input.select(); }
  function run(q) {
    if (!fuse) return;
    q = q.trim();
    if (q.length < 2) { list.innerHTML = ""; idle(); return; }
    const res = fuse.search(q, { limit: 40 });
    status.textContent = res.length ? res.length + (res.length === 1 ? " result" : " results") : "nothing found for “" + q + "”";
    list.innerHTML = res.map(({ item }) =>
      '<li><a href="' + item.permalink + '">' +
        '<div class="t">' + esc(item.title) + "</div>" +
        '<div class="m">' + [item.kind, item.date].filter(Boolean).map(esc).join(" · ") + "</div>" +
        (item.summary ? '<div class="s">' + esc(item.summary) + "</div>" : "") +
      "</a></li>").join("");
  }

  document.querySelectorAll("[data-search-open]").forEach((b) => b.addEventListener("click", open));
  addEventListener("keydown", (e) => {
    const typing = /^(input|textarea|select)$/i.test(document.activeElement.tagName);
    if (e.key === "/" && !dlg.open && !typing && !e.metaKey && !e.ctrlKey) { e.preventDefault(); open(); }
    if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); dlg.open ? dlg.close() : open(); }
  });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  input.addEventListener("input", () => run(input.value));
  dlg.addEventListener("keydown", (e) => {
    const links = Array.from(list.querySelectorAll("a"));
    if (!links.length) return;
    const i = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); (links[i + 1] || links[0]).focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); i <= 0 ? input.focus() : links[i - 1].focus(); }
    else if (e.key === "Enter" && document.activeElement === input) { e.preventDefault(); links[0].click(); }
  });
})();
