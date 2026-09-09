# prisha-personal-website

Personal website for Prisha Agarwal. Editorial, calm, typographically driven. Not a portfolio template.

## Stack

- Astro 7 (static output, no client framework; small vanilla `<script>` islands only)
- Fonts self-hosted via Fontsource: Fraunces Variable (display), Newsreader Variable (body), IBM Plex Mono (labels)

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run check` — astro check (types + diagnostics); run this plus `npm run build` before considering work done
- Visual review: `agent-browser` is installed globally (`agent-browser open <url>`, `set viewport 390 844`, `set media dark|light [reduced-motion]`, `hover <sel>`, `screenshot /abs/path.png`). Use absolute paths for screenshots. Check light + dark, 390px, and reduced motion for anything scroll-driven

## Architecture

- `src/data/sections.ts` — single source of truth for the 8 numbered sections (nav, menu, homepage index all derive from it)
- `src/data/chain.ts` — the five moments of "How one thing led to another": vine connector words, headings, details with marked terms, and the evidence each term reveals (`clippings` / `cascade` / `ledger` / `tabs`). Copy lives here, not in the component
- `src/components/Chain.astro` — the vine. One SVG generated at runtime from where the text actually lands (centripetal Catmull-Rom through per-moment anchors; a prolate-cycloid curl; a superellipse outline for the thought bubble whose roundness adapts so text never touches it). Drawn by scroll from a single smoothed "tip" at 62% of the viewport; moments and labels light when the tip passes them and stay lit. Evidence opens on hover, click/tap, Enter/Space; Escape closes. Under 960px it collapses to one column and evidence unfolds in place
- `src/pages/uaa.astro` — destination for "Explore UAA" (stub, scaffolded like the other unwritten pages)
- `src/data/contexts.ts` — the Context page lenses. Each lens (Student, New York, Coding, Investor, Markets) has its own image "plate" in `src/assets/context/` (`portrait.jpg`, `student.jpg`, `newyork.jpg`, `markets.jpg`), crossfaded in `ContextExplorer.astro`; Coding/Investor reuse the portrait plate with corner annotations. `portrait.jpg` is the full, uncropped original upload — its framing is intentionally left alone (no crop/zoom) since that caused a visible jump between lenses before. Student/New York are separate generated images and are known not to be pixel-identical to the original; that inconsistency is accepted for now rather than "fixed" with further cropping
- `src/layouts/Base.astro` — head, theme init (inline, pre-paint), reveal-on-scroll observer, header/menu/footer
- `src/styles/global.css` — all design tokens (colors, type scale, motion durations/easings). Both themes defined here; `data-theme` on `<html>`
- Theme switch uses the View Transitions API for a circular reveal from the toggle button; falls back to instant switch (reduced motion / unsupported browsers)
- Scroll reveals: put `data-reveal` on an element; CSS handles the rest (gated behind `.js` class and `prefers-reduced-motion`)

## Conventions

- Editorial voice: dry, specific, first person. No corporate language ("passionate", "journey", "leverage", "impact")
- Never invent biographical facts. Placeholders must be clearly identifiable (see `Scaffold.astro` usage on stub pages)
- Mono uppercase labels for structure ("03 / 09"), Fraunces for display, Newsreader for running text
- Hover states stay subtle: a few px of movement, color shifts, drawn underlines. Nothing theatrical
- Section numbering 01–09 is load-bearing (09 is the footer; the joke is intentional)
