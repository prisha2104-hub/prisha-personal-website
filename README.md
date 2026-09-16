# Prisha Agarwal — Personal Website

The personal site of Prisha Agarwal: economics and mathematics at Barnard College,
Columbia University; calculus TA; currently building Universal Asset Analyzer.
Designed and written from scratch — an editorial site, not a portfolio template.

## The idea

The site is organized as seven numbered parts (the footer is 07, on purpose).
A single hand-drawn line carries the reading experience: it draws itself as you
scroll, from the name on the homepage to the index, through the causal chain on
[How one thing led to another](src/pages/one-thing-led-to-another.astro), and
along the coursework trail. Details stay quiet until asked for — evidence
appears when you hover a marked term, books can be pulled off the shelf, and
[the conventional version](src/pages/conventional.astro) is a résumé page with
a print stylesheet, so the PDF is a byproduct of the site rather than the other
way around. Two themes (paper and ink), both warm; reduced-motion preferences
are respected everywhere.

## Built with

- [Astro 7](https://astro.build) — fully static output, no client framework;
  interactions are small hand-written TypeScript islands
- Self-hosted fonts via Fontsource: Fraunces, Newsreader, IBM Plex Mono
- No analytics, no cookies, no external requests at runtime

## Running it locally

Requires a recent Node.js (v20 or later recommended).

```sh
git clone https://github.com/prisha2104-hub/prisha-personal-website.git
cd prisha-personal-website
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` (the port is fixed in
`astro.config.mjs`).

Other commands:

```sh
npm run build     # static production build into dist/
npm run preview   # serve the production build locally
npm run check     # Astro type and diagnostic checks
```

## Finding your way around

- `src/data/` — all content as typed data: the section index, the chain's
  moments, the current semester, the bookshelf, the résumé record. Copy lives
  here, not inside components.
- `src/components/` — one component per set piece: the vine (`Chain.astro`),
  the trail, the bookshelf, the résumé dossier.
- `src/pages/` — the numbered parts, the unlisted academic-trail subpage, and
  the 404.
- `src/styles/global.css` — every design token (color, type scale, motion)
  for both themes.

## A note on reuse

This is my personal site. The code is public to read, but the design, writing,
images, and biographical content are intentionally custom and specific to me —
please don't republish them as your own.
