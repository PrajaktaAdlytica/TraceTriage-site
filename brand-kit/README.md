# TraceTriage brand kit

This package is the reusable identity and visual foundation for the selected Horizon Ledger website direction, with the evidence diagrams/chart/table and five-offer motifs requested in the latest screenshots.

## Review order

1. Open `BRAND-BOARD.png` for the identity, palette, typography, states and product motifs.
2. Open `REFERENCE-GALLERY.html` with the folder intact. Its local controls demonstrate selection, filtering, loading, validation and an approval-boundary dialog. It makes no network submissions and stores no email data.
3. Read `BRAND-KIT.md` for complete layout, components, state, motion, accessibility and product rules.
4. Read `PAGE-VISUAL-MAP.md` for page/chapter visual assignments and interactions.
5. Inspect `RESEARCH.md`, `QA.md` and `asset-manifest.json` for provenance, performed checks and limits.

The brand application image is a visual study, not a screenshot of an implemented site. Editable SVG, CSS/JSON tokens and the synthetic fixture are the authoritative build inputs; do not embed generated interface text or chart pixels as functioning UI.

## Included

- Selected Ledger Signature emblem, outlined wordmark, primary/reverse/black/white horizontal and compact SVG/PNG lockups.
- Branded SVG/ICO/PNG favicon, Apple touch icon, Android icons and manifest.
- Newsreader normal/italic and Manrope variable fonts, WOFF2 web versions and original OFL notices.
- Semantic tokens for colors, surfaces, typography, spacing, grids, margins, focus, shadows and motion; representative component CSS.
- 37 original consistent UI icons; five distinct larger product motifs; unchanged official social artwork.
- 93 editable page/section figures across36 planned routes: charts, tables, scope/ownership maps, topology, timelines, proposal boundaries, export flows and buyer journeys.
- Three original generated conceptual photographs, six vector background treatments and WebP variants.
- Deterministic synthetic JSON/CSV with12 accounts and8/3/1 evidence certainty.
- Interactive local reference gallery, brand board and representative raster previews.

Some figures intentionally share a visual grammar and reusable primitives. Their narrative purpose and data differ. The full website still needs page design/implementation and actual browser QA; this kit does not claim those are complete.

## Use in the later website

Copy the needed assets into the repository; use repository-relative public URLs. Import `tokens.css` after setting font URLs to their deployed paths, or translate `tokens.json` into the framework's token system. Build live chart/table/diagram controls as semantic HTML/SVG from `synthetic-fixture.json`. At mobile widths, use labeled stacked steps or record lists instead of shrinking desktop SVG text.

Example head setup (paths must match the website asset structure):

```html
<link rel="icon" href="/brand/favicon/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/brand/favicon/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/brand/favicon/apple-touch-icon.png">
<link rel="manifest" href="/brand/favicon/site.webmanifest">
```

Use positive/reverse logos according to the rendered background. Respect clear space and minimum size. Use Newsreader for editorial display and Manrope for UI/data; retain font licenses. Reserve image dimensions and prefer WebP variants. Do not remove synthetic labels from UI, visuals or exports.

## Publication boundaries

No production authentication, model calls, payments, paging, customer-system writes or real rollback. Proposed telemetry/connectors, prices and pilot benefits stay explicitly hypothetical. Approval is deliberate and mock in the demo; never caused by scroll or hover. No fabricated testimonials, customers, certification or measured improvement.

LinkedIn/Crunchbase artwork is included with provenance, but no TraceTriage profile URLs are supplied. Reference entries are inactive; do not ship `href="#"` or unrelated company links. Fonts have SIL OFL notices; social assets remain subject to their owners' terms. Fictional architecture is a visual metaphor, not a company-office claim.

The kit can be used immediately for design and frontend work. Operator/contact/legal facts, social URLs, domain, real form handling, paid-pilot scope and launch accounts are later factual inputs.
