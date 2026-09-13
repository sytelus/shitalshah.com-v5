# Chain — the theme behind shital.com

Chain is a reading-first Hugo theme built for this site. Warm paper and ink,
three self-hosted typefaces, a "chain of thought" rail that tracks where you
are, sidenotes in the margin, and no decoration that is not text. Every page
works without JavaScript; JavaScript only adds conveniences.

This file is the maintainer manual. The reasoning behind the look is in
[docs/DESIGN.md](docs/DESIGN.md).

## Requirements

* Hugo **extended** ≥ 0.146 (the theme uses the new template layout,
  `transform.ToMath`, image processing and `images.Text`).
* Nothing else. No Node, no Tailwind, no build step.

## How this site selects it

The site's default theme is Congo. Chain is enabled through a Hugo
configuration environment: `config/chain/*.toml` is merged over
`config/_default/` when building with `--environment chain`. From the site
root:

```bash
THEME=chain ./view.sh                          # preview
THEME=chain ./deploy.sh                        # deploy
hugo-latest server --environment chain         # by hand
```

Nothing in `config/_default/`, `content/`, `static/` or the site root is
chain-specific; everything the theme needs is in `themes/chain/` and
`config/chain/`. Congo's own overrides live in `themes/congo-site/` and are
not loaded when chain is active.

## Directory map

```
themes/chain/
├── hugo.toml              theme defaults for every params.* key (documented inline)
├── theme.toml             theme metadata
├── assets/
│   ├── css/               concatenated in name order → one minified, fingerprinted file
│   │   ├── 00-tokens.css  colours, fonts, sizes — the only file most tweaks need
│   │   ├── 10-base.css    @font-face, reset, root typography
│   │   ├── 20-layout.css  shell, header, footer, page grid, rail (TOC)
│   │   ├── 30-content.css article header, prose, images, tables, footnotes, sidenotes
│   │   ├── 40-components.css masthead, chain list, pagination, search, HUD, lightbox…
│   │   ├── 50-code.css    code block chrome + Chroma token palette (light & dark)
│   │   └── 90-print.css   print / PDF stylesheet
│   ├── js/
│   │   ├── theme-init.js  inlined in <head>; applies the saved light/dark choice before paint
│   │   ├── chain.js       theme toggle, TOC tracking, HUD, sidenotes, lightbox, copy, tweets
│   │   ├── search.js      Fuse.js search UI over /index.json
│   │   └── pdf-download.js "pdf ↓" link → html2pdf.js (loaded from cdnjs on click)
│   ├── lib/fuse/          Fuse.js 7 (Apache-2.0), bundled into the JS file
│   └── og/                build-time only: paper.png, canvas.png and two TTFs for social cards
├── static/
│   ├── fonts/             Literata (roman+italic), Fraunces, JetBrains Mono — woff2, OFL
│   └── lib/katex/         KaTeX CSS + woff2 fonts, loaded only on pages with math
└── layouts/
    ├── baseof.html        skeleton: head → header → main → footer → search dialog → scripts
    ├── home.html          masthead, page content, recent chain
    ├── page.html          single post: rail + article + footer (share, neighbours, comments)
    ├── section.html       list grouped by year, paginated (term.html is a copy)
    ├── taxonomy.html      tag cloud with counts
    ├── 404.html
    ├── home.json          search index
    ├── rss.xml            full-content RSS for home, sections and tags
    ├── robots.txt
    ├── _markup/           render hooks: headings, links, images, tables, code, math
    ├── _shortcodes/       lead, profile, katex (no-op), tweet
    └── _partials/
        ├── head.html, head/assets.html, head/seo.html, head/schema.html
        ├── header.html, footer.html, rail.html, hud.html, search.html, scripts.html
        ├── chain-pagination.html, author-links.html
        ├── article/       meta, list-item, neighbours, sharing, author
        └── functions/     small helpers that *return* values (see below)
```

Site-level files that the theme reads if present:

| File in the site | Purpose |
|---|---|
| `assets/css/chain-custom.css` | appended after the theme CSS; put overrides here (named so it never collides with Congo's `custom.css`) |
| `assets/js/custom.js` | appended to the JS bundle |
| `layouts/_partials/comments.html` | comment system; a Giscus partial ships inside the theme at `themes/chain/layouts/_partials/comments.html` (site-level file overrides it) |
| `layouts/_partials/extend-head.html` / `extend-footer.html` | extra tags |
| `layouts/_partials/favicons.html` | replaces the default favicon links |
| `assets/img/…` | `params.author.image` (used on About, author card, JSON-LD) |

## Configuration

All keys and their defaults are in [hugo.toml](hugo.toml). The site overrides
them in `config/chain/params.toml` (merged over `config/_default/params.toml`,
whose Congo-only keys are ignored). Highlights:

* `params.author.*` — `name`, `image`, `headline` (the big line on the home
  page), `bio`, `jobTitle`, `affiliation`, `twitter` (handle), `links` (list of
  `{ key = url }`; labels live in `_partials/author-links.html`).
* `params.article.*` — every switch (`showDate`, `showReadingTime`,
  `showWordCount`, `showTaxonomies`, `showTableOfContents`, `showComments`,
  `showDownloadPdf`, `showSharing`, `sharingLinks`, `showHud`, `sidenotes`,
  `showPagination`, `showAuthor`). Each can be overridden per page in front
  matter with the same name, and an explicit `false` is honoured.
* `params.list.groupByYear`, `params.list.showSummary` (summaries are shown for
  long-form posts only, never for tweets).
* `params.homepage.recentLimit`, `params.recentLink`.
* `params.seo.generateCards` — `"essays"` (default) generates a social image
  for every long-form post; `"all"` does it for tweets too (~50 KB each);
  `"none"` uses the site card everywhere.
* `params.titleSuffix`, `params.locale`, `params.robots`.
* `params.imageSizes` — srcset widths for page-bundle images.

Required site configuration (already in `config/chain/`):

* `markup.highlight.noClasses = false` — code colours come from CSS.
* `markup.goldmark.parser.wrapStandAloneImageWithinParagraph = false` — lets
  images become `<figure>`s.
* `markup.goldmark.extensions.passthrough` — LaTeX math.
* `outputs.home = ["HTML", "RSS", "JSON"]` — the JSON is the search index.
* `services.googleAnalytics.id`, `services.rss.limit`.

## Front matter the theme understands

`title`, `description` (shown under the title and used as meta description),
`date`, `lastmod`, `tags`, `draft`, `slug`, `image`/`cover`/`feature` (social
image; a page resource name or URL), `robots`, `is_tweet` + `tweet_info.{id,
type, is_thread}` (tweet posts), `private` (hides comments), `flatten` (on a
section `_index.md`: list all descendants), `groupByYear`, `showSummary`, and
every `params.article.*` switch by name.

## How the pieces work

**Fonts.** Variable fonts from Google Fonts, trimmed with `fonttools`
(`varLib.instancer`) so unused axes are baked in: Fraunces (opsz 72, SOFT 30,
WONK 1; weight variable), Literata (opsz 18; weight variable), JetBrains Mono
(weight variable). Total ≈ 190 KB. The two faces needed for first paint are
`<link rel=preload>`ed. To change a face, drop a woff2 in `static/fonts/`,
update the `@font-face` in `10-base.css` and the stack in `00-tokens.css`.

**Colours.** Two palettes in `00-tokens.css`: light on `:root`, dark repeated
under `@media (prefers-color-scheme: dark)` (system choice) and under
`:root[data-theme="dark"]` (explicit toggle). Keep the two dark blocks
identical. All colours pass WCAG AA on their intended backgrounds.

**Type scale.** `--text` is a `clamp()` from 18 px on phones to 22.4 px on
desktops (Literata's large x-height reads like a 24 px sans); `--text-scale` multiplies everything. `--measure` (36em) is the
reading width and `--leading` (1.7) the line height. Breakpoints are in `em`:
40 (phone), 64 (rail appears), 96 (sidenote margin appears).

**Layout.** `.page` is a CSS grid: one column on small screens; `rail | main`
from 64em; `rail | main | margin` from 96em. The rail holds a `<details>` with
Hugo's `.TableOfContents`; `chain.js` opens it on desktop, closes it on
phones, and highlights the current heading while scrolling. Pages without at
least two headings use the `no-rail` variant and centre the measure.

**Chain list.** `article/list-item.html` renders each post as a node on a
vertical rail (`<ol class="chain">`). Long-form posts get a filled rust node,
a display-face title and a summary; tweets get a hollow node and a `tweet /
thread` label. Year headings are larger nodes. All of it is CSS on one list.

**HUD.** On long-form posts `hud.html` emits a small fixed box; `chain.js`
fills it with a block-character progress bar, percentage and minutes left. On
phones the same element becomes a 2 px progress line at the top.

**Sidenotes.** Standard Markdown footnotes. On ≥ 96em `chain.js` clones each
note into an `<aside class="sidenote">` floated into the margin next to its
reference and hides the footnote list; on narrower screens footnotes stay at
the end. Disable with `sidenotes = false`.

**Images.** `_markup/render-image.html` turns page-bundle images into
`<picture>` elements with WebP and original-format `srcset`s at
`params.imageSizes`, intrinsic width/height (no layout shift), lazy loading
(the first image is eager), and a click-to-zoom lightbox. Remote images, SVG
and GIF are passed through with lazy loading.

**Code.** `_markup/render-codeblock.html` wraps Chroma output in
`<figure class="code">` with a caption bar (language, optional `{title="…"}`,
copy button). The token palette is in `50-code.css`.

**Math.** `_markup/render-passthrough.html` renders `$$…$$`, `\[…\]` and
`\(…\)` with KaTeX **at build time** (`transform.ToMath`); the page then flags
`hasMath` and `head.html` links the KaTeX CSS. No client-side math JS. The old
`{{< katex >}}` shortcode still works (it only sets the flag).

**Search.** `home.json` indexes every page in `params.mainSections` (title,
tags, summary, first 3000 characters). `search.js` fetches it on first open,
searches with Fuse.js and renders results in a native `<dialog>`. Keys: `/`
or ⌘/Ctrl+K to open, Esc to close, ↑/↓ to move, ↵ to open the first result.

**PDF.** The `pdf ↓` link (`article/meta.html`) rasterises `#blog-content`
with html2pdf.js, skipping anything with the `print:hidden` class (the same
elements `90-print.css` hides).

**Tweets.** `_shortcodes/tweet.html` outputs a plain blockquote link;
`chain.js` loads `widgets.js` once, lazily, when the first embed scrolls near,
and sets the dark theme on the embeds if the site is dark.

**Comments.** `page.html` calls the site's `_partials/comments.html` when
`showComments` is on and only wraps a section if the partial returns output
(the Giscus partial returns nothing for drafts, private posts and tweets).
`chain.js` re-themes the Giscus iframe when the visitor toggles appearance.

## SEO checklist (what every page carries)

* One `<h1>`; semantic `header / nav / main / article / aside / footer`;
  skip link; visible focus rings; `lang`; `<time datetime>`.
* `<title>` as `Post · Shital Shah` (home: site title; paginated: `· page N`).
* `meta description` from `description` → summary → site description, ≤ 160
  characters, single-spaced.
* Canonical URL (paginated pages self-canonicalise, with `rel=prev/next`).
* Open Graph + Twitter Card, including image size and alt, `article:*` times,
  section and tags.
* JSON-LD `@graph`: `WebSite` + `Person` (with `sameAs` from author links) on
  home; `BlogPosting` on posts (author, publisher, dates, image, word count,
  keywords, `sameAs` to the original tweet); `ProfilePage` on pages using the
  profile shortcode; `CollectionPage` on lists; `BreadcrumbList` everywhere
  but home.
* `rel="me"` links, RSS autodiscovery, `robots.txt` with the sitemap URL,
  `sitemap.xml`, favicons and web manifest.
* Performance: one CSS file, one deferred JS file, both fingerprinted with SRI;
  preloaded fonts with `font-display: swap`; responsive lazy images with
  dimensions; no render-blocking third parties (Giscus/Twitter/html2pdf load
  on demand).

Lighthouse (desktop preset, local build): 100 / 100 / 100 / 100 on the home
page and long-form posts.

## Common changes

| I want to… | Edit |
|---|---|
| make text bigger everywhere | `assets/css/chain-custom.css` → `:root { --text-scale: 1.08 }` |
| change the accent colour | `--rust` / `--rust-2` (both palettes) in `00-tokens.css` |
| change the reading width | `--measure` |
| add a social link | `params.author.links` in `config/_default/languages.en.toml`; label map in `author-links.html` |
| add a menu entry | `config/chain/menus.en.toml` |
| hide the HUD / sidenotes / PDF link | `params.article.*` or per-page front matter |
| change the social card look | `assets/og/paper.png` (1200×630) and `functions/social-card.html` |
| change code colours | the `--c-*` variables in `50-code.css` |
| show summaries in lists for tweets too | `article/list-item.html` (drop the `is_tweet` guard) |
| change the comment system | edit `layouts/_partials/comments.html` in the theme (or add one at site level) |

## Testing

```bash
THEME=chain ./view.sh                                   # http://localhost:1313, live reload
hugo-latest --environment chain --printPathWarnings     # build into public/
```

Check at least: home, `/blog/`, a long post with images and code
(`/blog/gpu-memory-profiling/`), a tweet post, `/misc/about/`, `/tags/`,
`/404.html`, `/index.json`, `/index.xml`, both colour schemes, and widths
around 390 / 820 / 1280 / 1600 px.

## Licence

MIT (see [LICENSE](LICENSE)). Bundled fonts are under the SIL Open Font
License; Fuse.js under Apache-2.0; KaTeX under MIT.
