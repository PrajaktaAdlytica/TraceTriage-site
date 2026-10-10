# TraceTriage — identity research and provenance

9 October 2026. Research used the configured official Perplexity MCP high research preset, followed by direct inspection/download of the relevant official source files. The raw research is retained in project scratch; the curated primary sources below inform the kit. Brand-owner rules and our design inferences are distinguished.

## Real identity systems studied

| Identity / source | What the official source supports | TraceTriage design inference |
|---|---|---|
| [Linear brand](https://linear.app/brand) | Separate wordmark, logomark and icon contexts; monochrome and generous spacing | Make the name the default navigation treatment; test a compact mark separately. Do not borrow the circular bands. |
| [incident.io brand](https://incident.io/brand) | Full flame wordmark, standalone mark and mono treatments | Package contrast-specific and monochrome variants; avoid flame symbolism already associated with incident tooling. |
| [Sentry branding](https://sentry.io/branding/) and [logo rationale](https://blog.sentry.io/new-logo/) | Glyph/wordmark assets and a historical alert-led triangle rationale | Convey diagnosis through a checkpoint rather than adopting an alert triangle; keep glyph and full name as separate exports. |
| [IBM eight-bar identity](https://www.ibm.com/design/language/ibm-logos/8-bar/) | Paul Rand identity; optical differences between positive and reversed artwork | Inspect actual small-size and reverse renders. Do not simply assume the light variant behaves identically. Do not copy bars. |
| [Pentagram: IBM data visualization](https://www.pentagram.com/work/ibm-data-visualization-guidelines/story) | A modular visualization language across product applications | Extend TraceTriage’s path, uncertainty and checkpoint grammar into charts/diagrams. This is a systems lesson, not attribution of the IBM logo to Pentagram. |
| [Vercel brand assets](https://vercel.com/geist/brands) | Separate symbol/logotype and background-specific SVG/PNG variants | Supply positive/reverse assets chosen for the rendered surface. Avoid solitary triangle silhouettes. |
| [Grafana official icon source](https://github.com/grafana/grafana/blob/main/public/img/grafana_icon.svg) and [trademark policy](https://grafana.com/trademark-policy/) | Product icon artwork and restrictions on altering/incorporating the mark | Give TraceTriage its own compact product icon; do not adopt Grafana’s swirl or treat a reference as permission to reuse it. |

These sources do not establish TraceTriage’s originality, trademark availability or legal clearance. The checkpoint is an original construction proposal. No competitor mark is included in the website asset library.

## Typography source and license

- [Newsreader official project](https://github.com/productiontype/Newsreader), [Google Fonts specimen](https://fonts.google.com/specimen/Newsreader), [official font source](https://github.com/google/fonts/tree/main/ofl/newsreader): Newsreader normal/italic variable TTF and OFL copied from the Google Fonts repository; converted locally to WOFF2 without changing glyph outlines. Newsreader supplies the expressive editorial hierarchy from selected option3.
- [Manrope official font source](https://github.com/google/fonts/tree/main/ofl/manrope), [OFL](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt): variable font packaged for UI and data. Manrope600 was instantiated for the vector wordmark; paths use deliberate optical spacing. The original font files and notices remain in `fonts/`.
- Both are SIL Open Font License1.1 assets, not proprietary font substitutions. The SVG wordmark has no runtime font dependency. UI SVG labels have a Manrope/Arial fallback; the HTML gallery loads local Manrope. Website implementation must load packaged WOFF2 and preserve notices.

## Official footer social assets

No TraceTriage profile URLs were supplied. The reference gallery displays the two marks with visible “profile not supplied” copy as noninteractive entries. Adding them does not authorize creation of company profiles or imply platform endorsement.

**LinkedIn:** [official downloads](https://brand.linkedin.com/downloads), [in-logo guidance](https://brand.linkedin.com/in-logo). The official download HTML exposed this [in-logo ZIP](https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/logos/in-logo.zip). Original white/black/blue PNGs were extracted without edits to `icons/social/`. Use the supplied variant suited to the background, preserve proportions and eligible profile-link use. Do not recreate the `in` lettering or use the full word logo as an improvised social icon.

**Crunchbase:** [official press page](https://about.crunchbase.com/press). Direct inspection found the official press-preview [blue vector wordmark](https://cdn.prod.website-files.com/687e6d0359c517be389ea464/699cd6b24bf1f2f372ff4740_cb_logo_bluevector%20(1).svg), saved unchanged. Its current site also provides the official [256px cb webclip](https://cdn.prod.website-files.com/687e6d0359c517be389ea464/69257c9295545c9acddcaa0d_cb-webclip-256x256.png), saved unchanged for the requested compact footer-icon reference. A webclip source establishes artwork provenance, not blanket trademark permission. No standalone `cb` usage specification was verified; retain original artwork and confirm permitted profile-link use before publication. [Crunchbase terms](https://about.crunchbase.com/terms-of-service) and [attribution guidance](https://about.crunchbase.com/terms-of-service/attribution-instructions) are context, not a substitute for a specific icon license.

## User references and adaptations

- Selected image: revised set, displayed option3, `03-horizon-ledger.png`. Adopt the architecture, copper/slate/apricot materials, large serif, asymmetry and warm light. Preserve a distinct editorial composition across routes. Logo in that image was provisional and is replaced by the checkpoint master.
- Screenshot22.09.49: adopt the trace→write→accounts→owner→approval mechanism, 8/3/1 evidence certainty chart, CRM table and pending approval. Rebuild in semantic UI/vector rather than embedding a screenshot.
- Screenshot22.09.53: adopt the five **different** product motifs and petrol chapter treatment. Keep all five working offer names and relevant links. Do not turn the motifs into evidence of launched products.
- Earlier broad moodboard: editorial typography, tactile backgrounds, cinematic imagery and section variety; not the nature/energy/running/shipping topics or third-party brands. Unrelated astrology chat and SpaceBridgeFund logo excluded.
- `STARTUP_WEBSITE_MASTER_GUIDE.md`: quality/coverage defaults, not a claim that prescribed technology, legal copy or invented proof is mandatory. Current brief and user decisions take precedence.

## Original asset provenance

- Checkpoint logo, UI icons, diagrams, topology/scope maps, charts, table illustrations and textures: authored as editable SVGs for this kit.
- `hero-horizon.png`: generated original conceptual corridor using selected option3 as art-direction reference; no copy baked into background.
- `problem-ledger-gap.png`: generated original slate/copper evidence-gap illustration using the same selected direction.
- `material-copper-archive.png`: generated original editorial material detail for Company/Resources, if included.
- These are fictional visual metaphors, not photographs of TraceTriage property, people or customers. Keep alt text/captions truthful.
- Synthetic fixture/data: authored from the brief,12 accounts,8/3/1 certainty,TR-27/WB-3, fictional owner. It is not outcome proof.

- `BRAND-APPLICATION.png`: revised selected option3, generated using the actual brand board/logo and both latest screenshots; corrected the real-execution implication and aligned three visible event IDs to the fixture. This is a visual study; implement text, data and brand masters from editable sources rather than image pixels.


## Selected logo update — Option 4

The user selected Ledger Signature. Canonical logo/favicons, board, brand specification and gallery now use the refined vector identity. See LOGO-REFINEMENT.md. Earlier checkpoint artwork is archived in references/superseded-checkpoint; the raster BRAND-APPLICATION remains historical art direction. Logo SVG XML and PNG decoding checks passed. Actual 16/24/32/48 specimens were rendered for inspection; this is not a browser accessibility audit. Previous package file counts are superseded by the updated ZIP.


## Correction — original Option 4 restored

The preceding Newsreader redraw was rejected by the user. It is superseded by direct vector contour conversion of the selected original Option 4, preserving lettering and the intricate emblem. Canonical logo and favicon folders, board and gallery now use the faithful original shapes. See LOGO-REFINEMENT.md. Traced vector fidelity is limited by the source raster resolution; smooth manually rebuilt Bézier masters are not claimed.
