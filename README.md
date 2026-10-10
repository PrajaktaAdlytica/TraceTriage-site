# TraceTriage website

A working React website built from the approved architectural direction and the original Option 4 Ledger Signature identity. Includes 36 planned pages plus 11 additional account drill-down routes: **47 prerendered routes**.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite (normally `http://127.0.0.1:5173/`).

For the production build and prerendered pages:

```sh
npm run build
npm run preview
```

## What is implemented

- Architectural homepage with the approved corridor image and faithful Option 4 logo.
- GSAP ScrollTrigger chapter sequences on the homepage, product, platform, persona, company, trust and problem pages. Native readable sequences on mobile, short screens and reduced-motion devices.
- Lenis smooth wheel scrolling, ordinary touch scrolling, a motion toggle, chapter navigation and story skip links.
- Five distinct product visuals: correlation desk, account impact map, human approval boundary, source timeline and report/evaluation document.
- Interactive 8/3/1 evidence coverage chart, the five-stage evidence flow and twelve-account reconciliation table.
- Complete product, solution, platform, pricing, evaluation, resources, company, contact, legal and access pages.
- Functional local incident walkthrough: filters, account sources, event expansion, deliberate review dialog, review rationale, reset and JSON report download.
- Inquiry forms with validation, draft editing and local file export; correct downloadable resource guides.
- Responsive navigation, keyboard focus handling, native dialogs, table semantics and reduced-motion support.
- Local Newsreader/Manrope fonts, favicon SVG/ICO/PNG, touch icons, web manifest and 1200 × 630 social image.
- Prerendered HTML and metadata for direct routes, including a branded 404.
- Vercel build configuration. No hosting account or domain has been connected.

## Important service boundaries

The browser incident is synthetic. It calls no model or production system and executes no pause, rollback or account mutation. Review decisions live in React memory and clear on reload. The export includes this boundary and the current review rationale.

Forms prepare a downloadable inquiry; they do not send email, book a meeting or store leads remotely. Workspace authentication is not connected. LinkedIn and Crunchbase marks are present but remain inactive because approved company profile URLs have not been supplied.

Pricing is explicitly identified as a commercial hypothesis. Customer outcomes and certifications are not invented. The current privacy/use pages describe the implementation; operator details and approved production notices are still needed before commercial launch.

## Deploy when services are ready

Import this folder as the Vercel project root. The supplied `vercel.json` builds with `npm run build` and serves `dist`.

Set `SITE_URL` to the verified HTTPS production origin before building. The prerender step then emits route canonical URLs, absolute social-image URLs and a sitemap. No domain is guessed by the build.

Before a commercial launch, connect the approved inquiry processor and identity service, supply company social URLs and legal operator details, and verify the production domain. See [launch handoff](docs/LAUNCH-HANDOFF.md).

## Source map

| File | Responsibility |
| --- | --- |
| `src/content.js` | Product/persona copy, route metadata and story chapters |
| `src/components.jsx` | Navigation, motion, diagrams, charts, forms and shared components |
| `src/pages.jsx` | Distinct marketing and incident pages |
| `src/styles.css` | Brand roles, grid, responsive layouts and component states |
| `src/fixture.json` | Twelve-account synthetic scenario |
| `src/App.jsx` | Route composition |
| `scripts/prerender.mjs` | Static HTML, metadata and route exports |
| `public/brand` | Approved logo, icon, font, image and favicon assets |

The SVG logo is the original Option 4 contour trace, not the previously rejected font substitution. Font licenses are included with the assets. Official social marks retain their original appearance.

See [motion and interaction notes](docs/INTERACTIONS.md) and [QA results](docs/QA.md).

## Repository package and final QA

- `brand-kit/`: approved Option 4 identity, logo variants, favicon set, tokens, typography, diagrams and imagery. Historical references to rejected drafts are archival notes; rejected assets are excluded.
- `creative/`: intro storyboard, generated sequence frames and Google Flow production prompts.
- `public/intro/corridor.mp4`: the supplied local intro video used by the website.
- `qa/`: final route/layout audit results, screenshots and [final report](qa/FINAL-QA.txt).
- [Manual Vercel setup](docs/VERCEL-SETUP.txt).

Run `npm run build && npm run qa:static` to repeat the static release check. Earlier reports in `docs/` describe previous QA passes; `qa/FINAL-QA.txt` records the publication pass.
