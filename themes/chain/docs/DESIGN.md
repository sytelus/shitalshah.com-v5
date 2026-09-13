# Design notes for Chain

Why the site looks the way it does, so future changes can keep the same
spirit instead of accreting.

## Brief

Redesign shital.com without touching its content: 19 long-form posts spanning
twenty years, ~900 short posts exported from Twitter, an About page. It should
feel as considered and personal as the sites that inspired it (flab.world,
mll.sh, deadmoney.gg, gwern.net), read well on any screen, be easy to
maintain, and be thorough about SEO. No stock imagery, no "portal" chrome, no
theme-store look.

## What was borrowed, and what was not

| Source | Taken | Left behind |
|---|---|---|
| **mll.sh** | a fixed rail with a hairline and tick marks that tracks the reader; margin footnotes; a text-only external-link marker; a typographic section break; one warm paper palette | the all-monospace body (hard on long essays); image zoom on hover |
| **deadmoney.gg** | commit to one mood and hold it, including in dark mode (ours is warm, not neutral grey); strong headline face against a quiet body | textured wallpapers, gold-on-brown contrast that fails AA |
| **flab.world** | a small monospace HUD in the corner as a *playful instrument* (ours shows reading progress); the sense that the site has a world of its own | WebGL, a splash you must click through |
| **gwern.net** | the metadata block under titles; sidenotes; link annotations; density without clutter; print/PDF as first-class; "no JS required" | dropcaps, small caps, popups, hover previews (too much for this content) |
| **colors.lol** | descriptive names for every colour token, so intent survives edits | — |
| **learnui typography tutorial** | 17–21 px body, 66–75 characters per line, 1.55–1.6 line height, paragraph spacing ≈ one line, S.L.U.B. (size / letter-spacing / uppercase / bold) for small labels | — |

## The idea: a chain of thought

The site is literally titled "Chain of Thought". So the one recurring
graphic is a thin vertical rail with nodes on it:

* On the home page and in lists, posts are nodes on the rail; filled rust
  nodes are essays, hollow nodes are tweets, larger rings are years.
* On a post, the table of contents is the same rail; the tick that grows and
  darkens is where you are.
* The social-share card repeats the rail and a single node.

Everything else is typography.

## Typography

* **Fraunces** (display) for titles, the wordmark and year markers. Its soft,
  slightly wonky old-style shapes give the site its personality in a way no
  hero image could. Pinned to opsz 72 / SOFT 30 / WONK 1 so it is consistent.
* **Literata** (text) for body copy. Designed by TypeTogether for Google
  Play Books, i.e. for hours of screen reading: large x-height, sturdy
  strokes, a true italic. Set at 22 px with a 1.7 line height on desktops;
  in dark mode the weight is nudged to 430 so thin strokes do not shimmer.
  Optical size pinned at 18.
* **JetBrains Mono** (labels and code) for everything "instrumental": dates,
  metadata, navigation, the TOC, the HUD, captions, tags. The mono register
  says "this is machinery, not prose" without needing icons.

Rules: two type sizes of hierarchy per view at most; labels in mono get
uppercase only when they are really labels (table headers, h5/h6). Headings
are display-face; body links are ink with a rust underline so colour never
does the work alone.

## Colour

Light: unbleached paper (#F6F1E8), dried ink (#1C1A17), one accent — rust
(#B4451C) — and verdigris (#2E6E68) reserved for code and strings. Dark: a
blackboard after erasing (#171513), chalk (#EAE3D6), ember (#E5824F). Every
foreground/background pair used for text is ≥ 4.5:1 (muted text ≥ 6:1), and
every interactive control has a visible frame in both schemes so affordances
do not depend on colour alone. The dark palette is
warm on purpose: it should feel like the same room with the lights down, not
a different product.

## Layout

Reading width 36em (≈ 75 characters). A left rail for orientation and a right
margin for asides appear only when there is room (64em, 96em), so a laptop
gets rail + text and a wide monitor gets rail + text + sidenotes. Below 64em
the TOC folds into a collapsed `<details>` above the article and the HUD
becomes a 2 px progress line. Gutters never drop below 16 px and nothing has
a fixed width wider than the screen.

## What deliberately is *not* here

Hero images, cards with shadows, icon fonts, cookie banners, "read more"
buttons, social share badges, animated anything (transitions are ≤ 300 ms and
disabled under `prefers-reduced-motion`), infinite scroll, client-side
routing, external font or CSS CDNs.

## If you extend it

* Add colour only through tokens; give the token a descriptive name.
* New UI text goes in mono, lowercase, and earns an accent colour only if it
  is interactive.
* Anything that needs JavaScript must degrade to working HTML (see how the
  TOC, search dialog and tweet embeds do it).
* Keep the two dark palette blocks identical and re-check contrast.
